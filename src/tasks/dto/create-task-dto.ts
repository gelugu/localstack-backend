import { WorkingSegment } from "../classes"

export class CreateTaskDto {
  name: string
  description: string
  workingSegments: WorkingSegment[]
}
