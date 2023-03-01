import { Module } from '@nestjs/common';
import { OcnBlockController } from './ocn_block.controller';
import { OcnBlockService } from './ocn_block.service';

@Module({
  controllers: [OcnBlockController],
  providers: [OcnBlockService]
})
export class OcnBlockModule {}
