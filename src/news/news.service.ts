import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {News} from '../typeorm';
import {Repository} from 'typeorm';
import {CreateNewDto} from './dto/create-new.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  public async getList(): Promise<any> {
    return await this.newsRepository.find();
  }

  public async add(createNewDto: CreateNewDto) {
    const newFilmFragment = this.newsRepository.create(
      createNewDto
    );
    await this.newsRepository.save(newFilmFragment);
    return {news: await this.getList()};
  }
}
