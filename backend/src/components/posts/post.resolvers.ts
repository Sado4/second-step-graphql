import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { ConfigService } from '@nestjs/config';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(private configService: ConfigService) {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }

  @Query(() => Int)
  hello(): number {
    return this.configService.get<number>('PORT'); // 3333 (number型になります)
  }

  // @Query(() => String)
  // helloConfiguration() {
  //   const nodeEnv = this.configService.get<string>('NODE_ENV'); // development （.env.development.localのもの）
  //   const databaseUrl = this.configService.get<string>('DATABASE_URL'); // postgresql:/... （.env.development.localのもの）
  //   const microCmsKey = this.configService.get<string>('MICRO_CMS_KEY'); // 1234567890（環境変数のもの）
  // }
}
