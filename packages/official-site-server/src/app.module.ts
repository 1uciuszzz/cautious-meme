import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DataSource } from "typeorm";

import { UsersModule } from "./users/users.module";
import { database } from "./utilities/database";
import { NewsModule } from "./news/news.module";
import { AuthModule } from "./auth/auth.module";
import { RoutesModule } from "./routes/routes.module";
import { SettingsModule } from "./settings/settings.module";

@Module({
  imports: [
    database,
    UsersModule,
    NewsModule,
    AuthModule,
    RoutesModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private database: DataSource) {}
}
