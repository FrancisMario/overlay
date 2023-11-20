import { Test, TestingModule } from '@nestjs/testing';
import { AugmentedRealityService } from './augmented-reality.service';

describe('AugmentedRealityService', () => {
  let service: AugmentedRealityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AugmentedRealityService],
    }).compile();

    service = module.get<AugmentedRealityService>(AugmentedRealityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
