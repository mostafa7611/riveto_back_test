import { Injectable } from '@nestjs/common';
import { user } from '~/configs/user';

@Injectable()
export class AppService {
  functionTest(): object {
    return user;
  }
}
