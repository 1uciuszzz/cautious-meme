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
import { SettingsService } from "./settings.service";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createSettingDto: CreateSettingDto) {
    return this.settingsService.create(createSettingDto);
  }

  @Get("activate")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  getActivate() {
    return this.settingsService.getActivate();
  }

  @Get()
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.settingsService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.settingsService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.update(+id, updateSettingDto);
  }

  @Delete(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.settingsService.remove(+id);
  }

  @Get(":id")
  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  activate(@Param("id") id: string) {
    return this.settingsService.activate(+id);
  }
}
