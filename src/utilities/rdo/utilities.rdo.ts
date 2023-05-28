import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class UtilitiesRdo {
  @ApiProperty({
    description: 'Utilities list',
    example: [],
    isArray: true,
    type: []
  })
  @Expose()
  public utilities: [];
}
