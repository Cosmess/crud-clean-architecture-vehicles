import { expect } from 'chai';
import { VehicleUseCase } from '../src/application/usecases/vehicle.usecase';
import { Vehicle } from '../src/domain/entities/vehicle.entity';
import { CreateVehicleDto } from '../src/application/dtos/vehicle.dto';
import { VehicleRepositoryImpl } from '../src/infrastructure/database/vehicle.repository.impl';

describe('VehicleUseCase', () => {
  let mockVehicleRepository: Partial<VehicleRepositoryImpl>;
  let vehicleUseCase: VehicleUseCase;

  beforeEach(() => {
    mockVehicleRepository = {
      create: async (vehicle: Vehicle) => ({
        ...vehicle,
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      findAll: async () => [
        { id: '1', placa: 'ABC-1234', chassi: '9BWZZZ377VT004251', renavam: '1234567890', modelo: 'Gol', marca: 'Volkswagen', ano: 2024 },
      ] as Vehicle[],
      findById: async (id: string) => (id === '1' ? {
        id: '1', placa: 'ABC-1234', chassi: '9BWZZZ377VT004251', renavam: '1234567890', modelo: 'Gol', marca: 'Volkswagen', ano: 2024,
      } : null) as Vehicle,
      update: async (id: string, vehicle: Vehicle) => ({
        ...vehicle,
        id,
        updatedAt: new Date(),
      }),
      delete: async (id: string) => undefined,
    };

    vehicleUseCase = new VehicleUseCase(mockVehicleRepository as VehicleRepositoryImpl);
  });

  describe('Create', () => {
    it('deve criar um veículo com sucesso', async () => {
      const createDto: CreateVehicleDto = {
        placa: 'ABC-1234',
        chassi: '9BWZZZ377VT004251',
        renavam: '1234567890',
        modelo: 'Gol',
        marca: 'Volkswagen',
        ano: 2024,
      };

      const result = await vehicleUseCase.create(createDto);

      expect(result).to.include({ placa: 'ABC-1234', modelo: 'Gol' });
      expect(result.id).to.equal('1');
    });
  });

  describe('FindAll', () => {
    it('deve retornar todos os veículos', async () => {
      const result = await vehicleUseCase.findAll();
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.include({ id: '1', placa: 'ABC-1234' });
    });
  });

  describe('FindById', () => {
    it('deve retornar um veículo pelo ID', async () => {
      const result = await vehicleUseCase.findById('1');
      expect(result).to.include({ id: '1', placa: 'ABC-1234' });
    });

    it('deve retornar null se o veículo não for encontrado', async () => {
      const result = await vehicleUseCase.findById('2');
      expect(result).to.be.null;
    });
  });

  describe('Update', () => {
    it('deve atualizar um veículo com sucesso', async () => {
      const updateDto: CreateVehicleDto = {
        placa: 'DEF-5678',
        chassi: '8HGCM82633A123456',
        renavam: '0987654321',
        modelo: 'Civic',
        marca: 'Honda',
        ano: 2022,
      };

      const result = await vehicleUseCase.update('1', updateDto);

      expect(result).to.include({ id: '1', placa: 'DEF-5678', modelo: 'Civic' });
    });

    it('deve lançar um erro se o veículo não for encontrado', async () => {
      try {
        await vehicleUseCase.update('2', { placa: '', chassi: '', renavam: '', modelo: '', marca: '', ano: 0 });
        expect.fail('Deveria ter lançado um erro');
      } catch (error) {
        expect(error.message).to.equal('Veículo não encontrado.');
      }
    });
  });

  describe('Delete', () => {
    it('deve excluir um veículo com sucesso', async () => {
      await vehicleUseCase.delete('1');
    });
  });
});
