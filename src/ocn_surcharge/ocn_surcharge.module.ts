import { Module } from '@nestjs/common';
import { OcnSurchargeController } from './ocn_surcharge.controller';
import { OcnSurchargeService } from './ocn_surcharge.service';

@Module({
  controllers: [OcnSurchargeController],
  providers: [OcnSurchargeService]
})
export class OcnSurchargeModule {}
