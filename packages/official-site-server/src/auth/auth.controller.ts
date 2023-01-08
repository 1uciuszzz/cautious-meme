import { Body, Controller, Post, ForbiddenException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.validateUser(loginDto);
    if (!result.passed) {
      throw new ForbiddenException("身份验证失败");
    }
    return this.authService.createToken(result.user.id);
  }
}
