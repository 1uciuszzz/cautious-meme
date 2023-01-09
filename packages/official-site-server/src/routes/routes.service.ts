import { Injectable } from "@nestjs/common";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { Repository } from "typeorm";
import { Route } from "./entities/route.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routesRepository: Repository<Route>
  ) {}

  create(createRouteDto: CreateRouteDto) {
    return "This action adds a new route";
  }

  findAll() {
    return `This action returns all routes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
