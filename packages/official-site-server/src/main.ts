import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["log", "error"],
  });

  const docConfig = new DocumentBuilder()
    .setTitle("official site document")
    .setDescription("quanty soft official site api document.")
    .setVersion("0.0.1")
    .build();

  const document = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup("doc", app, document);

  app.use(helmet());

  await app.listen(8000, "0.0.0.0");
}
bootstrap();
