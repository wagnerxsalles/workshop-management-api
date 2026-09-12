import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service.js';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

@Get()
findAll() {
  return this.clientsService.findAll();
}

}
