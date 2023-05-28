import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {News} from '../typeorm';
import {NewsService} from './news.service';
import {NewsController} from './news.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([News])
  ],
  providers: [NewsService],
  controllers: [NewsController],
  exports: [NewsService]
})
export class NewsModule {
}
