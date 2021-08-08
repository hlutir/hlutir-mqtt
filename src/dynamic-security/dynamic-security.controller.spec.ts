import { Test, TestingModule } from '@nestjs/testing';
import { DynamicSecurityController } from './dynamic-security.controller';

describe('DynamicSecurityController', () => {
  let controller: DynamicSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicSecurityController],
    }).compile();

    controller = module.get<DynamicSecurityController>(DynamicSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
