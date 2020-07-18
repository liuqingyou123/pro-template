import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as packages from '../package.json'


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
    .setTitle(packages.name)
    .setDescription(packages.description)
    .setVersion(packages.version)
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
