import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Author } from './author.model';

// Authorに相当するスキーマを返却することを宣言している
@Resolver((of) => Author)
export class AuthorResolver {
  // わかりやすさのため、データをベタ書き
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

  // Authorの配列を返却することを宣言している
  // descriptionにより説明文も記載可能
  @Query((returns) => [Author], { description: 'Authorを全て取得する' })
  async getAuthor() {
    return this.authors;
  }

  // Authorを単体で返却することを宣言している
  // nullableのオプションをtrueに設定しているため、Authorオブジェクトもしくはnullが返却されることがわかる
  @Query((returns) => Author, {
    nullable: true,
    description: 'ID指定でAuthorを取得する',
  })
  // `id`というInt型の引数をリクエスト時に指定することで、idを使った絞り込みが行えることを明示している
  async findAuthor(
    @Args('id', { type: () => Int, description: '絞り込み用のID' }) id: number,
  ) {
    return this.authors.find((item) => item.id === id);
  }
}
