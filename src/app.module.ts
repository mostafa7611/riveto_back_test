// we don't really do so much here
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '@/app.service'; //address is based on tsconfig.json
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}
