import { IsNotEmpty, IsString } from 'class-validator';

export default class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
