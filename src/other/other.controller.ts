import { Controller, Get, Param } from '@nestjs/common';
import { OtherService } from './other.service';

@Controller('other')
export class OtherController {
  constructor(private service: OtherService) {}

  @Get(':id')
  action(@Param(':id') id) {
    console.log(id);
    return this.service.method1();
  }
}
