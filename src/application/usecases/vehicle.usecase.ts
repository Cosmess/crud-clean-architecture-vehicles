import { Injectable } from '@nestjs/common';
import { Vehicle } from '../../domain/entities/vehicle.entity';
import { VehicleRepositoryImpl } from '../../infrastructure/database/vehicle.repository.impl';
import { CreateVehicleDto } from '../dtos/vehicle.dto';


@Injectable()
export class VehicleUseCase {
  constructor(
    private readonly vehicleRepository: VehicleRepositoryImpl,
  ) {}

  async create(vehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = new Vehicle();
    vehicle.placa = vehicleDto.placa;
    vehicle.chassi = vehicleDto.chassi;
    vehicle.renavam = vehicleDto.renavam;
    vehicle.modelo = vehicleDto.modelo;
    vehicle.marca = vehicleDto.marca;
    vehicle.ano = vehicleDto.ano;

    return this.vehicleRepository.create(vehicle);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  findById(id: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findById(id);
  }

  async update(id: string, vehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const existingVehicle = await this.vehicleRepository.findById(id);
    if (!existingVehicle) {
      throw new Error('Veículo não encontrado.');
    }

    existingVehicle.placa = vehicleDto.placa;
    existingVehicle.chassi = vehicleDto.chassi;
    existingVehicle.renavam = vehicleDto.renavam;
    existingVehicle.modelo = vehicleDto.modelo;
    existingVehicle.marca = vehicleDto.marca;
    existingVehicle.ano = vehicleDto.ano;

    return this.vehicleRepository.update(id, existingVehicle);
  }

  delete(id: string): Promise<void> {
    return this.vehicleRepository.delete(id);
  }
}