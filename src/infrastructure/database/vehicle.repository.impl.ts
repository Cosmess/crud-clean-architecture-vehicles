import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../../domain/entities/vehicle.entity';

@Injectable()
export class VehicleRepositoryImpl {
  constructor(
    @InjectRepository(Vehicle)
    private readonly repository: Repository<Vehicle>,
  ) {}
  
  async create(vehicle: Vehicle): Promise<Vehicle> {
    return this.repository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Vehicle | null> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, vehicle: Vehicle): Promise<Vehicle> {
    await this.repository.update(id, vehicle);
    return this.repository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export default VehicleRepositoryImpl;
