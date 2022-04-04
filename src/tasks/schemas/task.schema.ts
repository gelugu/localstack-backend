import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { WorkingSegment } from "../classes"

export type TaskDocument = Task & Document

@Schema()
export class Task {
  @Prop({ required: true, unique: true })
  name: string

  @Prop()
  description: string

  @Prop()
  workingSegments: WorkingSegment[]
}

export const TaskSchema = SchemaFactory.createForClass(Task)
