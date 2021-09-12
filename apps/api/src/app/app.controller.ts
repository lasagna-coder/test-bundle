import { Controller, Get } from '@nestjs/common';

import {ApiService} from '@api/shared';
@Controller('data')
export class AppController {
  constructor(private apiService: ApiService) {}

  @Get()
  getData() {
    return this.apiService.getData();
  }
}
