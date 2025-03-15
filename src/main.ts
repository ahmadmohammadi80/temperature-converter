import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // اضافه شده
import { join } from 'path'; // اضافه شده

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // تنظیم پوشه public برای فایل‌های استاتیک
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();