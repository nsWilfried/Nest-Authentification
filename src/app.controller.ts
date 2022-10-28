import { Body, Controller, Get, Headers, HttpCode, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'; 
import { userDto } from './user.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(200)
  @Get("/")
  demo(@Req() request:Request, @Headers() header:Headers): string[] {
    // console.log(header)
    return ["e", "je uis ou"]
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createPostMethod(@Body() user:userDto, @Req() request: Request) {
    console.log("la request", request.body )
    return {}
  }

}
