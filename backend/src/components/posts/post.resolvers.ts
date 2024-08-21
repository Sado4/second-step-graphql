import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './interfaces/post.model';
import { ConfigService } from '@nestjs/config';
import { PbEnvService } from 'src/config/environments/pb-env.service';
import { PrismaService } from '../prisma/prisma.service';
import { GetPostsArgs } from './interfaces/get-posts-connection.args';

@Resolver((of) => PostModel)
export class PostsResolver {
  constructor(
    private configService: ConfigService,
    private pbEnvService: PbEnvService,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(() => [PostModel], { name: 'fixedPosts', nullable: true })
  async getPostsByFixedData() {
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

  @Query(() => String)
  helloEnvDbUrl(): string {
    return this.pbEnvService.DatabaseUrl; // postgresql:/... （.env.development.localのもの）
  }

  @Query(() => [PostModel], { name: 'prismaPosts', nullable: true })
  async getPostsByPrisma() {
    return this.prismaService.post.findMany();
  }

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts(@Args() args: GetPostsArgs) {
    return this.prismaService.post.findMany({
      where: {
        type: args.type
          ? { in: args.type } // args.type 配列のいずれかの値に一致するレコードを取得
          : undefined, // 未指定の場合は全てのレコードを取得
        published: true, // 公開されているものだけ取得
      },
      orderBy: {
        publishDate: 'desc',
      },
    });
  }

  // @Query(() => String)
  // helloConfiguration() {
  //   const nodeEnv = this.configService.get<string>('NODE_ENV'); // development （.env.development.localのもの）
  //   const databaseUrl = this.configService.get<string>('DATABASE_URL'); // postgresql:/... （.env.development.localのもの）
  //   const microCmsKey = this.configService.get<string>('MICRO_CMS_KEY'); // 1234567890（環境変数のもの）
  // }
}
