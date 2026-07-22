import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IClient {

  getClient(): string;

  getUpperCase(str: string): string;
}

@Controller()
export class AppController implements IClient {

  getClient(): string {
    return 'Hello I am Amazing People';
  }

  getUpperCase(str: string): string {
    return str.toUpperCase();
  }

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/Amazing')
  getMessage() {
    return this.getUpperCase(this.getClient());
  }
}
