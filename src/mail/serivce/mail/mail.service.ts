import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: CreateUserDto) {
    const confirmNumber = Math.floor(Math.random() * 100000);
    await this.mailerService.sendMail({
      to: user.email,
      from: 'sendermail017@gmail.com',
      html: `<h2>Hi dear ${user.name} ${user.surname} this is your confirmation code <br/> ${confirmNumber}</h2>`,
      subject: 'confirmation',
    });
  }
}
