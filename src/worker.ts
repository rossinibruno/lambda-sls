import { NestFactory } from '@nestjs/core';
import { Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { QueueService } from './queue/queue.service';

let server: INestApplication;

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  return app;
}

export const handler: Handler = async (event: any) => {
  server = server ?? (await bootstrap());

  const handler = server.get(QueueService);

  const message = event.Records[0];
  const job = JSON.parse(message.body);
  return handler.proccess(job);
};
