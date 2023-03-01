import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('chat')
  findUserMessage() {
    return this.userService.findUserMessage();
  }

  @Post()
  async getUserData(@Body() obj: { token: string }) {
    const user = await this.userService.getUserData(obj.token);
    return user;
  }

  @Put(':id')
  async update(@Param() id: number, @Body() user: User) {
    const res = await this.userService.update(id, user);
    return res;
  }
  @Delete(':id')
  async delete(@Param() id: number) {
    const res = await this.userService.remove(id);
    return res;
  }
}
