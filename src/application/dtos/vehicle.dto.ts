import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({ example: 'ABC-1234', description: 'Placa do veículo' })
  placa: string;

  @ApiProperty({ example: '9BWZZZ377VT004251', description: 'Número do chassi' })
  chassi: string;

  @ApiProperty({ example: '12345678901', description: 'Número do Renavam' })
  renavam: string;

  @ApiProperty({ example: 'Gol', description: 'Modelo do veículo' })
  modelo: string;

  @ApiProperty({ example: 'Volkswagen', description: 'Marca do veículo' })
  marca: string;

  @ApiProperty({ example: 2024, description: 'Ano de fabricação' })
  ano: number;
}
