import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';

describe('PostsController', () => {
  let controller: PostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('未定義ではないか', () => {
    expect(controller).toBeDefined();
  });

  it('`All posts`の文字列が返る', () => {
    expect(controller.getPosts()).toBe('All posts');
  });
});
