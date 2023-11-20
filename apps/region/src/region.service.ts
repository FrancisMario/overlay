import { Injectable } from '@nestjs/common';
import EventEmitter from 'events';

@Injectable()
export class RegionService {
  regionEvents = new EventEmitter();
  regionId;
  constructor(regionId:string, ) { }
  getHello(): string {
    return 'Hello World!';
  }
}
