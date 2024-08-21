import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './components/posts/posts.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { PbEnvModule } from './config/environments/pb-env.module';
import { PbEnvService } from './config/environments/pb-env.service';
import { WinstonModule } from 'nest-winston';
import { PrismaModule } from './components/prisma/prisma.module';
import { PrismaServiceOptions } from './components/prisma/interfaces/prisma-module-options.interface';

@Module({
  imports: [
    PbEnvModule,
    PostsModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      inject: [PbEnvService],
      driver: ApolloDriver,
      useFactory: (env: PbEnvService) => env.GqlModuleOptionsFactory,
    }),
    WinstonModule.forRootAsync({
      inject: [PbEnvService],
      useFactory: (env: PbEnvService) => env.WinstonModuleOptionsFactory,
    }),
    PrismaModule.forRootAsync({
      imports: [WinstonModule],
      inject: [PbEnvService],
      isGlobal: true,
      useFactory: (env: PbEnvService) =>
        ({
          prismaOptions: env.PrismaOptionsFactory,
        } as any),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
