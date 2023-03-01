import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { MailService } from 'src/mail/serivce/mail/mail.service';
import { Render } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private mailService: MailService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('registration')
  async create(@Body() user: CreateUserDto) {
    user.password = await bcrypt.hash(user.password, 12);
    const result = await this.authService.create(user);
    console.log('user', user);
    await this.mailService.sendUserConfirmation(user);
    return result;
  }
}
