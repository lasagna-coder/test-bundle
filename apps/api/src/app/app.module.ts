import { Module } from '@nestjs/common';
import {ApiSharedModule} from '@api/shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiSharedModule],
  controllers: [AppController],
  providers: [AppService, ApiSharedModule],
})
export class AppModule {}
