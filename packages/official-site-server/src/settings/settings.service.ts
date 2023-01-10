import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSettingDto } from "./dto/create-setting.dto";
import { UpdateSettingDto } from "./dto/update-setting.dto";
import { Setting } from "./entities/setting.entity";

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private settingsRepository: Repository<Setting>
  ) {}

  async create(createSettingDto: CreateSettingDto) {
    const dupName = await this.settingsRepository.findOneBy({
      name: createSettingDto.name,
    });
    if (dupName) {
      throw new ForbiddenException(
        `name为${createSettingDto.name}的配置已存在`
      );
    }
    const setting = this.settingsRepository.create({
      name: createSettingDto.name,
    });
    const result = await this.settingsRepository.save(setting);
    return result;
  }

  async getActivate() {
    const setting = await this.settingsRepository.findOneBy({
      activate: true,
    });
    return setting;
  }

  async findAll() {
    const settings = await this.settingsRepository.find();
    return settings;
  }

  async findOne(id: number) {
    const setting = await this.settingsRepository.findOneBy({
      id: id,
    });
    if (!setting) {
      throw new NotFoundException(`id为${id}的配置不存在`);
    }
    return setting;
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    const setting = await this.settingsRepository.findOneBy({
      id: id,
    });
    if (!setting) {
      throw new NotFoundException(`id为${id}的配置不存在`);
    }
    for (const key in updateSettingDto) {
      setting[key] = updateSettingDto[key];
    }
    const result = await this.settingsRepository.save(setting);
    return result;
  }

  async remove(id: number) {
    const setting = await this.settingsRepository.findOneBy({
      id: id,
    });
    if (!setting) {
      throw new NotFoundException(`id为${id}的配置不存在`);
    }
    const result = await this.settingsRepository.remove(setting);
    return result;
  }

  async activate(id: number) {
    const currentActivate = await this.settingsRepository.findOneBy({
      activate: true,
    });
    currentActivate.activate = false;
    const targetSetting = await this.settingsRepository.findOneBy({
      id: id,
    });
    targetSetting.activate = true;
    return targetSetting;
  }
}
