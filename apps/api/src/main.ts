import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.WEB_ORIGIN || true, credentials: true });
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
