import { Model, Types } from "mongoose"
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Task, TaskDocument } from "./schemas/task.schema"
import { CreateTaskDto } from "./dto/create-task-dto"
import { UpdateTaskDto } from "./dto/update-task-dto"

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getAll(): Promise<Task[]> {
    return this.taskModel.find().exec()
  }

  async getById(id: Types.ObjectId): Promise<Task> {
    return this.taskModel.findById(id).exec()
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto)
    return createdTask.save()
  }

  async update(
    id: Types.ObjectId,
    updateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true })
  }

  async deleteById(id: Types.ObjectId): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id)
  }
}
