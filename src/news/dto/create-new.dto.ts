import {ApiProperty} from '@nestjs/swagger';
import {IsInt, IsString} from 'class-validator';

export class CreateNewDto {
  @ApiProperty({
    description: 'New title',
    example: 'My new title'
  })
  @IsString()
  public title: string;

  @ApiProperty({
    description: 'New subtitle',
    example: 'My new subtitle'
  })
  @IsString()
  public subtitle: string;

  @ApiProperty({type: 'string', format: 'binary', required: true})
  image_blob: Express.Multer.File;
}
