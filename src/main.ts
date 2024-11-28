import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedVehicles } from './database/seed/vehicle.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);

  await seedVehicles(dataSource);

  const config = new DocumentBuilder()
    .setTitle('CRUD de Veículos')
    .setDescription('API para gerenciar veículos (CRUD)')
    .setVersion('1.0')
    .addTag('vehicles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
