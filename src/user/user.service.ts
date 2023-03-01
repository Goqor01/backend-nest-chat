import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  getUser(query: object): Promise<User> {
    return this.usersRepository.findOneBy(query);
  }
  findAll(): Promise<User[]> {
    const newUser = this.usersRepository.find();
    return newUser;
  }
  async findUserMessage() {
    const userMessage = this.usersRepository.find({
      relations: { fromMessage: true },
      where: {
        fromMessage: {
          fromId: 77,
          toId: 85,
        },
      },
    });
    return userMessage;
  }
  async getUserData(token: string): Promise<User> {
    const user = await this.jwtService.verifyAsync(token);
    const users = await this.usersRepository.findOneBy({ email: user.email });
    return users;
  }
  async update(id: number, user: User) {
    await this.usersRepository.update(id, user);
  }
  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
