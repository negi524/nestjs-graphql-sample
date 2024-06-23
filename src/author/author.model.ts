import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Authorオブジェクト' })
export class Author {
  @Field((type) => Int, { description: 'ID' })
  id: number;

  @Field((type) => String, { description: '名前' })
  name: string;

  @Field((type) => Int, { nullable: true, description: '年齢' })
  age?: number;
}
