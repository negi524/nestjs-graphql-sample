import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorModule } from './author/author.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    // GraphQLを利用する際はこれを追加
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // コードファーストで実装しているので、スキーマは自動生成される
      sortSchema: true,
    }),
    AuthorModule, // 作成したmoduleをここに記載
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
