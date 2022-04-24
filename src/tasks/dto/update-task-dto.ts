import { Session } from "../classes"

export class UpdateTaskDto {
  name?: string
  description?: string
  sessions?: Session[]
}
