import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
  method1(): string {
    return 'It works!';
  }
}
