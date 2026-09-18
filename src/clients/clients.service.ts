import { Prisma } from '../generated/prisma/client.js';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';



@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService){}

  async findAll() {
    return this.prisma.client.findMany();
  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });

    if(!client) {
      throw new NotFoundException('Cliente não encontrado!')
    }

    return client;
  }

  async create(body: CreateClientDto) {
    try {
    return await this.prisma.client.create({
      data: body,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ConflictException('CPF já cadastrado!');
      }
    }
    throw error;
  }
 }

 async update(id: string, body: UpdateClientDto) {
  try {
    return await this.prisma.client.update({
      where: {
        id,
      },
      data: body,
    });
  }catch (error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2025') {
      throw new NotFoundException('Cliente não encontrado!');
    }
  }

  throw error;
}
}

  async delete(id: string) {
     try {
        return await this.prisma.client.delete({

          where: {
            id,
          },
        });
      } catch(error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2025') {
            throw new NotFoundException('Cliente não existe!');
          }

        
        }
          throw error;
      }
    }
  } 
   
   
  
 



