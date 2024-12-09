import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3001);
// }
// bootstrap();
async function start() {
  const PORT = 3001;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
                      .setTitle("React+Nest+Postgresql")
                      .setDescription("Документация по REST API")
                      .setVersion("q.0.0")
                      .addTag("nest ts postgres sql react")
                      .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);


  await app.listen(PORT, ()=>console.log(`Server running on PORT ${PORT}`))
  
}
start()