import { Test, TestingModule } from '@nestjs/testing';
import { DynamicSecurityService } from './dynamic-security.service';

describe('DynamicSecurityService', () => {
  let service: DynamicSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicSecurityService],
    }).compile();

    service = module.get<DynamicSecurityService>(DynamicSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
