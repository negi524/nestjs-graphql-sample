import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.model';

@Resolver((of) => Author)
export class AuthorResolver {
  private authors: Author[] = [
    {
      id: 1,
      name: 'hoge',
      age: 10,
    },
    {
      id: 2,
      name: 'fuga',
    },
    {
      id: 3,
      name: 'piyo',
      age: 20,
    },
  ];

  @Query((returns) => [Author], { description: 'Authorを全て取得する' })
  async getAuthor() {
    return this.authors;
  }

  @Query((returns) => Author, {
    nullable: true,
    description: 'ID指定でAuthorを取得する',
  })
  async findAuthor(
    @Args('id', { type: () => Int, description: '絞り込み用のID' }) id: number,
  ) {
    return this.authors.find((item) => item.id === id);
  }
}
