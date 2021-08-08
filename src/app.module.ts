import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicSecurityModule } from './dynamic-security/dynamic-security.module';

@Module({
  imports: [DynamicSecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
