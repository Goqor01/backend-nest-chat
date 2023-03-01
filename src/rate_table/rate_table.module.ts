import { Module } from '@nestjs/common';
import { RateTableController } from './rate_table.controller';
import { RateTableService } from './rate_table.service';

@Module({
  controllers: [RateTableController],
  providers: [RateTableService]
})
export class RateTableModule {}
