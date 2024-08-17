import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [PostsResolver],
})
export class PostsModule {}
