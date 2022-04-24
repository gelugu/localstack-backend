import { Session } from "../classes"

export class CreateTaskDto {
  name: string
  description: string
  session: Session[]
}
