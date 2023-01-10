import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dto/login.dto";
import { sign } from "jsonwebtoken";
import { config } from "src/utilities/config";
import { hashPassword } from "src/utilities/hashPassword";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  createToken(id: number) {
    const secretKey = config.secretKey;
    const expiresIn = config.tokenExpiresIn;
    const token = sign({ id }, secretKey, {
      expiresIn: expiresIn,
    });
    return {
      token: `Bearer ${token}`,
    };
  }

  async validateUser(payload: LoginDto) {
    const hashedPassword = hashPassword(payload.password);
    const user = await this.userService.findOne({
      where: {
        username: payload.username,
        password: hashedPassword,
      },
    });
    return { passed: !!user, user: user };
  }
}
