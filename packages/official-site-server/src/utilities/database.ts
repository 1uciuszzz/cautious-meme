import { TypeOrmModule } from "@nestjs/typeorm";
import { News } from "src/news/entities/news.entity";
import { Users } from "src/users/entities/users.entity";

const database = TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cautious-meme",
  entities: [Users, News],
  synchronize: true,
  logging: true,
});

export { database };
