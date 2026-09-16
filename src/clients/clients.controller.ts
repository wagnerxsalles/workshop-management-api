import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

@Get()
findAll() {
  return this.clientsService.findAll();
}

@Post()
create(@Body() body: CreateClientDto) {
  return this.clientsService.create(body);
} 

}
