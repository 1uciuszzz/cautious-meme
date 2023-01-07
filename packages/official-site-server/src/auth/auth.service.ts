import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  login(loginDto: LoginDto) {
    return "login";
  }
}
