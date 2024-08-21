import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { ConfigModule } from '@nestjs/config';
import { PostsController } from './posts.controller';

@Module({
  imports: [ConfigModule],
  controllers: [PostsController],
  providers: [PostsResolver],
})
export class PostsModule {}
