import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
      {
        provide: PrismaService,
        useValue: {},
      },
     ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
