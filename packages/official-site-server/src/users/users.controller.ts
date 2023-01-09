import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Req,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { Payload } from "src/auth/payload.interface";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.userService.findAll();
  }

  @Get("profile")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  async getProfile(@Req() req: Request) {
    const user = req.user as Payload;
    return this.userService.getProfile(user.id);
  }

  @Get(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findOneById(@Param("id") id: string) {
    return this.userService.findOneById(+id);
  }

  @Patch(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
