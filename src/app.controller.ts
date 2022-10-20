import { Controller, Get, Headers, HttpCode, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'; 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Get("/helo")
  demo(@Req() request:Request, @Headers() header:Headers): string[] {
    console.log(header)
    return ["e", "je uis ou"]
  }

}
