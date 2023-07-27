import { Module } from '@nestjs/common';
import { QueueService } from './queue/queue.service';

@Module({
  imports: [],
  controllers: [],
  providers: [QueueService],
})
export class AppModule {}
