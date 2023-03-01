import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AniGroupController } from './ani_group/ani_group.controller';
import { AniGroupService } from './ani_group/ani_group.service';
import { AniGroupModule } from './ani_group/ani_group.module';
import { ani_group } from './ani_group/entity/ani_group.entity';
import { AniGroupRelModule } from './ani_group_rel/ani_group_rel.module';
import { ani_group_rel } from './ani_group_rel/entity/ani_group_rel.entity';
import { CompanyModule } from './company/company.module';
import { company } from './company/entity/company.entity';
import { DidModule } from './did/did.module';
import { did } from './did/entity/did.entity';
import { OcnBlockModule } from './ocn_block/ocn_block.module';
import { ocn_block } from './ocn_block/entity/ocn_block.entity';
import { OcnSurchargeModule } from './ocn_surcharge/ocn_surcharge.module';
import { ocn_surcharge } from './ocn_surcharge/entity/ocn_surcharge.entity';
import { RateModule } from './rate/rate.module';
import { rate } from './rate/entity/rate.entity';
import { RateTableModule } from './rate_table/rate_table.module';
import { rate_table } from './rate_table/entity/rate_table.entity';
import { RouteModule } from './route/route.module';
import { route } from './route/entity/route.entity';
import { RoutingModule } from './routing/routing.module';
import { routing } from './routing/entity/routing.entity';
import { StopTextModule } from './stop_text/stop_text.module';
import { MailModule } from './mail/mail.module';
import { MessageModule } from './message/message.module';
import { Message } from './message/entity/message.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sms_center',
      entities: [
        User,
        ani_group,
        ani_group_rel,
        company,
        did,
        ocn_block,
        ocn_surcharge,
        rate,
        rate_table,
        route,
        routing,
        Message,
      ],
      synchronize: true,
    }),
    AuthModule,
    AniGroupModule,
    AniGroupRelModule,
    CompanyModule,
    DidModule,
    OcnBlockModule,
    OcnSurchargeModule,
    RateModule,
    RateTableModule,
    RouteModule,
    RoutingModule,
    StopTextModule,
    MailModule,
    MessageModule,
  ],
  controllers: [AppController, AniGroupController],
  providers: [AppService, AniGroupService],
})
export class AppModule {}
