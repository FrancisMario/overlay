import { Test, TestingModule } from '@nestjs/testing';
import { CowrieService } from './cowrie.service';

describe('CowrieService', () => {
  let service: CowrieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CowrieService],
    }).compile();

    service = module.get<CowrieService>(CowrieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
