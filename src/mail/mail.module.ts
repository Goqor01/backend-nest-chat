import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './serivce/mail/mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        secure: false,
        service: 'gmail',
        auth: {
          user: 'sendermail017@gmail.com',
          pass: 'ibccdlzlspsnijml',
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
