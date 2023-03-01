import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class GetUserWithoutGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    if (user) return user;
    return null;
  }
}
