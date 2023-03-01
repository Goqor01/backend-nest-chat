import { Module } from '@nestjs/common';
import { AniGroupRelController } from './ani_group_rel.controller';
import { AniGroupRelService } from './ani_group_rel.service';

@Module({
  controllers: [AniGroupRelController],
  providers: [AniGroupRelService]
})
export class AniGroupRelModule {}
