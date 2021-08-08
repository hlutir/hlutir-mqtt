import { Module } from '@nestjs/common';
import { DynamicSecurityService } from './dynamic-security.service';
import { DynamicSecurityController } from './dynamic-security.controller';

@Module({
  controllers: [DynamicSecurityController],
  providers: [DynamicSecurityService]
})
export class DynamicSecurityModule {}
