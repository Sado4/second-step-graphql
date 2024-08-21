import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env-validator';
import { PbEnvService } from './pb-env.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      validate,
      isGlobal: true,
    }),
  ],
  providers: [PbEnvService],
  exports: [PbEnvService],
})
export class PbEnvModule {}
