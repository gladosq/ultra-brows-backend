import {Module} from '@nestjs/common';
import {UtilitiesService} from './utilities.service';
import {UtilitiesController} from './utilities.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Utilities} from '../typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilities])
  ],
  providers: [UtilitiesService],
  controllers: [UtilitiesController],
  exports: [UtilitiesService]
})
export class UtilitiesModule {
}
