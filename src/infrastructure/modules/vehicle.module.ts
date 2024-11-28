import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '../../domain/entities/vehicle.entity';
import { VehicleRepositoryImpl } from '../database/vehicle.repository.impl';
import { VehicleUseCase } from '../../application/usecases/vehicle.usecase';
import { VehicleController } from '../controllers/vehicle.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Vehicle])],
    controllers: [VehicleController],
    providers: [
      VehicleUseCase,
      VehicleRepositoryImpl,
    ],
  })
  export class VehicleModule {}