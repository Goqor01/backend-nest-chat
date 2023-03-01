import { Module } from '@nestjs/common';
import { StopTextService } from './stop_text.service';
import { StopTextController } from './stop_text.controller';

@Module({
  providers: [StopTextService],
  controllers: [StopTextController]
})
export class StopTextModule {}
