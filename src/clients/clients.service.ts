import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';


@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService){}

  async findAll() {
    return this.prisma.client.findMany();
  }

  async create(body: CreateClientDto) {
    try {
    return  await this.prisma.client.create({
      data: body,
    });
  } catch (error: any) {
    throw new ConflictException('CPF já cadastrado!')
  }
 }
}

