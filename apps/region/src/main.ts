import { NestFactory } from '@nestjs/core';
import { RegionModule } from './region.module';

async function bootstrap() {
  const app = await NestFactory.create(RegionModule);
  await app.listen(3000);
}
bootstrap();
