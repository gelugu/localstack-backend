import { WorkingSegment } from "../classes"

export class UpdateTaskDto {
  name?: string
  description?: string
  workingSegments?: WorkingSegment[]
}
