import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { PbEnvService } from './config/environments/pb-env.service';
import { PrismaService } from './components/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const winstonLogger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(winstonLogger);
  const pbEnv = app.get(PbEnvService);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(pbEnv.Port, '0.0.0.0'); // 外部からリクエストを受け付けられるように 0.0.0.0 を追加
  winstonLogger.log(`PORT: ${pbEnv.Port}`);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
