import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class NewsRdo {
  @ApiProperty({
    description: 'News array',
    example: [],
    isArray: true,
    type: []
  })
  @Expose()
  public news: [];

}
