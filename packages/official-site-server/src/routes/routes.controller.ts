import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from "@nestjs/common";
import { RoutesService } from "./routes.service";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("routes")
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.routesService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.routesService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.routesService.remove(+id);
  }
}
