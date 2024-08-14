import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';

@Module({
  imports: [],
  controllers: [],
  providers: [PostsResolver],
})
export class PostsModule {}
