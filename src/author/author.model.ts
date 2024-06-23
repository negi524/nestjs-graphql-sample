import { Field, Int, ObjectType } from '@nestjs/graphql';

// オブジェクト全体に対してdescriptionを記載することもできる
@ObjectType({ description: 'Authorオブジェクト' })
export class Author {
  // GraphQLには数値型はIntとFloatがあるので、Int利用を明記する
  @Field((type) => Int, { description: 'ID' })
  id: number;

  // descriptionにより、フィールドに関する説明を記載できる
  @Field((type) => String, { description: '名前' })
  name: string;

  // nullableの場合もここで指定する
  @Field((type) => Int, { nullable: true, description: '年齢' })
  age?: number;
}
