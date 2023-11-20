import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller()
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  getHello(): string {
    return this.regionService.getHello();
  }
}
