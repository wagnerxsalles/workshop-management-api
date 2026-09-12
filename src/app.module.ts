import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ClientsModule } from './clients/clients.module.js';

@Module({
  imports: [ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
