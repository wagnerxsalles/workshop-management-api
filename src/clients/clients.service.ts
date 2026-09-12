import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  findAll() {
    return 'Lista de clientes';
  }
}
