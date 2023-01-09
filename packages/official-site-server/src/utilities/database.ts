import { TypeOrmModule } from "@nestjs/typeorm";
import { News } from "src/news/entities/news.entity";
import { Route } from "src/routes/entities/route.entity";
import { User } from "src/users/entities/user.entity";

const database = TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "cautious-meme",
  entities: [User, News, Route],
  synchronize: true,
  logging: true,
});

export { database };
