import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import { Session } from "../classes"

export type TaskDocument = Task & Document

@Schema()
export class Task {
  @Prop({ required: true, unique: true })
  name: string

  @Prop()
  description: string

  @Prop()
  sessions: Session[]
}

export const TaskSchema = SchemaFactory.createForClass(Task)
