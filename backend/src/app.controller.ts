import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PbEnvService } from './config/environments/pb-env.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pbEnvService: PbEnvService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('is-production')
  isProduction(): boolean {
    return this.pbEnvService.isProduction();
  }
}
