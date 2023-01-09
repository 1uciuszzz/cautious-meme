import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { hashPassword } from "src/utilities/hashPassword";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = hashPassword(createUserDto.password);
    const newUser = this.usersRepository.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      username: createUserDto.username,
      password: hashedPassword,
      email: createUserDto.email,
      departed: false,
    });
    const user = await this.usersRepository.save(newUser);
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number) {
    return await this.usersRepository.findOneBy({
      id: id,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException("用户不存在");
    }
    if (updateUserDto.password) {
      updateUserDto.password = hashPassword(updateUserDto.password);
    }
    for (const key in updateUserDto) {
      user[key] = updateUserDto[key];
    }
    const updatedUser = await this.usersRepository.save(user);
    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new NotFoundException("用户不存在");
    }
    const deletedUser = await this.usersRepository.remove(user);
    return deletedUser;
  }

  async findOne(condition: FindOneOptions<User>) {
    const user = await this.usersRepository.findOne(condition);
    return user;
  }
}
