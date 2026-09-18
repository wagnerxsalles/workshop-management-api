import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

@Get()
findAll() {
  return this.clientsService.findAll();
}

@Get(':id')
findOne(@Param('id') id: string) {
  return this.clientsService.findOne(id);

}

@Post()
create(@Body() body: CreateClientDto) {
  return this.clientsService.create(body);
} 

@Patch(':id')
update(@Param('id') id: string, @Body() body: UpdateClientDto) {
  return this.clientsService.update(id, body);
}

@Delete(':id')
delete(@Param('id') id: string) {
  return this.clientsService.delete(id);
}


}
