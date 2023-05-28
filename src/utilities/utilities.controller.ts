import {Controller, Get, HttpStatus} from '@nestjs/common';
import {ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UtilitiesService} from './utilities.service';
import {UtilitiesRdo} from './rdo/utilities.rdo';
import {Utilities} from '../typeorm';

@ApiTags('Utilities')
@Controller('utilities')
export class UtilitiesController {
  constructor(private readonly utilitiesService: UtilitiesService) {
  }

  @ApiResponse({
    type: UtilitiesRdo,
    status: HttpStatus.OK,
    description: 'Utilities found'
  })
  @ApiProperty({isArray: true, type: Utilities})
  @Get('/')
  public async getList() {
    return await this.utilitiesService.getList();
  }
}
