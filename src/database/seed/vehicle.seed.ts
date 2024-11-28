import { DataSource } from 'typeorm';
import { Vehicle } from '../../domain/entities/vehicle.entity';

export const seedVehicles = async (dataSource: DataSource) => {
  const vehicleRepository = dataSource.getRepository(Vehicle);

  const vehicles = [
    { placa: 'ABC-1234', chassi: '9BWZZZ377VT004251', renavam: '1234567890', modelo: 'Gol', marca: 'Volkswagen', ano: 2024 },
    { placa: 'XYZ-5678', chassi: '1HGCM82633A123456', renavam: '0987654321', modelo: 'Civic', marca: 'Honda', ano: 2022 },
    { placa: 'DEF-3456', chassi: '4T1BG22K9WU123456', renavam: '1122334455', modelo: 'Corolla', marca: 'Toyota', ano: 2023 },
    { placa: 'GHI-7890', chassi: '1N4AL11D75C123456', renavam: '9988776655', modelo: 'Sentra', marca: 'Nissan', ano: 2021 },
    { placa: 'JKL-1122', chassi: 'KMHCG45G23U123456', renavam: '5544332211', modelo: 'Elantra', marca: 'Hyundai', ano: 2020 },
    { placa: 'MNO-3344', chassi: '2HGFA165X6H123456', renavam: '2233445566', modelo: 'Fit', marca: 'Honda', ano: 2024 },
    { placa: 'PQR-5566', chassi: '3VWDD21H7YM123456', renavam: '6677889900', modelo: 'Jetta', marca: 'Volkswagen', ano: 2023 },
    { placa: 'STU-7788', chassi: 'JN1AZ34D35M123456', renavam: '4455667788', modelo: '350Z', marca: 'Nissan', ano: 2019 },
    { placa: 'VWX-9900', chassi: 'JH4KA8260MC123456', renavam: '9900887766', modelo: 'Accord', marca: 'Honda', ano: 2022 },
    { placa: 'YZA-1122', chassi: 'WAUVT68E73A123456', renavam: '3311223344', modelo: 'A4', marca: 'Audi', ano: 2021 },
  ];

  for (const vehicle of vehicles) {
    const existing = await vehicleRepository.findOne({ where: { placa: vehicle.placa } });
    if (!existing) {
      await vehicleRepository.save(vehicle);
    }
  }

  console.log('Veículos seed inseridos com sucesso!');
};
