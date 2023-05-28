import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Utilities} from '../typeorm';
import {Repository} from 'typeorm';
import {Utility} from '../../types/utility';

@Injectable()
export class UtilitiesService {
  constructor(
    @InjectRepository(Utilities)
    private readonly utilitiesRepository: Repository<Utility>,
  ) {}

  public async getList(): Promise<any> {
    return await this.utilitiesRepository.find();
  }
}
