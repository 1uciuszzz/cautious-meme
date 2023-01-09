import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { NewsService } from "./news.service";
import { CreateNewsDto } from "./dto/create-news.dto";
import { UpdateNewsDto } from "./dto/update-news.dto";

@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.newsService.findAll();
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param("id") id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(":id")
  @HttpCode(200)
  update(@Param("id") id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(":id")
  @HttpCode(200)
  remove(@Param("id") id: string) {
    return this.newsService.remove(+id);
  }
}
