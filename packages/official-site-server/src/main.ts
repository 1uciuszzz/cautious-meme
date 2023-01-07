import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConfig = new DocumentBuilder()
    .setTitle("official site document")
    .setDescription("quanty soft official site api document.")
    .setVersion("0.0.1")
    .build();

  const document = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup("doc", app, document);

  await app.listen(8000, "0.0.0.0");
}
bootstrap();
