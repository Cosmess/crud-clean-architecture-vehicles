import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VehicleUseCase } from '../../application/usecases/vehicle.usecase';
import { Vehicle } from '../../domain/entities/vehicle.entity';
import { CreateVehicleDto } from '../../application/dtos/vehicle.dto';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleUseCase: VehicleUseCase) {}

  @ApiOperation({ summary: 'Criar um novo veículo' })
  @ApiResponse({ status: 201, description: 'Veículo criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @Post()
  create(@Body() vehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleUseCase.create(vehicleDto);
  }

  @ApiOperation({ summary: 'Listar todos os veículos' })
  @ApiResponse({ status: 200, description: 'Lista de veículos.' })
  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleUseCase.findAll();
  }

  @ApiOperation({ summary: 'Buscar veículo por ID' })
  @ApiResponse({ status: 200, description: 'Veículo encontrado.' })
  @ApiResponse({ status: 404, description: 'Veículo não encontrado.' })
  @Get(':id')
  findById(@Param('id') id: string): Promise<Vehicle | null> {
    return this.vehicleUseCase.findById(id);
  }

  @ApiOperation({ summary: 'Atualizar um veículo existente' })
  @ApiResponse({ status: 200, description: 'Veículo atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Veículo não encontrado.' })
  @Put(':id')
  update(@Param('id') id: string, @Body() vehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleUseCase.update(id, vehicleDto);
  }

  @ApiOperation({ summary: 'Excluir um veículo' })
  @ApiResponse({ status: 200, description: 'Veículo excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Veículo não encontrado.' })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.vehicleUseCase.delete(id);
  }
}
