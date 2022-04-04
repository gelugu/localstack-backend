import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { Types } from "mongoose"
import { CreateTaskDto } from "./dto/create-task-dto"
import { UpdateTaskDto } from "./dto/update-task-dto"
import { TasksService } from "./tasks.service"
import { Task } from "./schemas/task.schema"

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.tasksService.getAll()
  }

  @Get(":id")
  async getTask(@Param("id") id: Types.ObjectId): Promise<Task> {
    return this.tasksService.getById(id)
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto)
  }

  @Put(":id")
  async update(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param("id") id: Types.ObjectId
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(":id")
  async deleteTask(@Param("id") id: Types.ObjectId): Promise<Task> {
    return this.tasksService.deleteById(id)
  }
}
