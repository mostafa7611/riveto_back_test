import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/test') //we don't do anything in the controller but using services
export class AppController {
  constructor(private nameTest: AppService) {}

  @Get('/')
  @Header('content-type', 'application/json')
  appleFunction(): object {
    //it should be the same as the type of app.service.ts
    return this.nameTest.functionTest();
  }

  @Post('/')
  cosCode(@Body() varName): object {
    return varName;
  }
}
