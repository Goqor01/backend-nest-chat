import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('chat')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
