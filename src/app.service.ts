import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPingTest(): string {
    return 'Hello World!';
  }
}
