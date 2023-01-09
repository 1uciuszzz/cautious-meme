import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
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

  async create(createRouteDto: CreateRouteDto) {
    if (createRouteDto.parentId !== 0) {
      const parent = await this.routesRepository.findOneBy({
        id: createRouteDto.parentId,
      });
      if (!parent) {
        throw new NotFoundException(
          `id为${createRouteDto.parentId}的路由不存在`
        );
      }
    }
    const dupPath = await this.routesRepository.findOneBy({
      path: createRouteDto.path,
    });
    const dupName = await this.routesRepository.findOneBy({
      name: createRouteDto.name,
    });
    if (dupPath || dupName) {
      throw new ForbiddenException("path或name已存在");
    }
    const newRoute = this.routesRepository.create({
      path: createRouteDto.path,
      name: createRouteDto.name,
      parentId: createRouteDto.parentId,
    });
    const result = await this.routesRepository.save(newRoute);
    return result;
  }

  async findAll() {
    const routes = await this.routesRepository.find();
    return this.buildTree(routes, 0);
  }

  async findOne(id: number) {
    const route = await this.routesRepository.findOneBy({
      id: id,
    });
    if (!route) {
      throw new NotFoundException(`id为${id}的路由不存在`);
    }
    return route;
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    if (updateRouteDto.parentId) {
      const parent = await this.routesRepository.findOneBy({
        id: updateRouteDto.parentId,
      });
      if (!parent) {
        throw new NotFoundException(
          `id为${updateRouteDto.parentId}的路由不存在`
        );
      }
    }
    const route = await this.routesRepository.findOneBy({
      id: id,
    });
    if (!route) {
      throw new NotFoundException(`id为${id}的路由不存在`);
    }
    for (const key in updateRouteDto) {
      route[key] = updateRouteDto[key];
    }
    const updatedRoute = this.routesRepository.save(route);
    return updatedRoute;
  }

  async remove(id: number) {
    const route = await this.routesRepository.findOneBy({
      id: id,
    });
    if (!route) {
      throw new NotFoundException(`id为${id}的路由不存在`);
    }
    const deletedRoute = await this.routesRepository.remove(route);
    return deletedRoute;
  }

  buildTree(routes: Route[], parentId: number) {
    const nodes = routes.filter(function (route) {
      return route.parentId === parentId;
    });
    if (nodes.length === 0) {
      return null;
    }
    return nodes.map((node) => ({
      id: node.id,
      path: node.path,
      name: node.name,
      children: this.buildTree(routes, node.id),
    }));
  }
}
