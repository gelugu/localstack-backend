import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  getHelp(): string {
    return "ToDo: return help message"
  }
}
