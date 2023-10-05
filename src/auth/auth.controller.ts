import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() userInfo) {
    return await this.authService.register(userInfo);
  }

  @Post('/login')
  async login(@Body() userInfo) {
    return await this.authService.login(userInfo);
  }
}
