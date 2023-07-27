import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  proccess(message): string {
    console.log(message);
    return message;
  }
}
