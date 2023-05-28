import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {ApiConsumes, ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import {News} from '../typeorm';
import {NewsService} from './news.service';
import {NewsRdo} from './rdo/news.rdo';
import {CreateNewDto} from './dto/create-new.dto';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {Helper} from '../../libs/utils';
import {DOMAIN_NAME} from '../../const/const';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {
  }

  @ApiResponse({
    type: NewsRdo,
    status: HttpStatus.OK,
    description: 'News found'
  })
  @ApiProperty({isArray: true, type: News})
  @Get('/')
  public async getList() {
    return await this.newsService.getList();
  }

  @Post('create')
  @ApiConsumes('multipart/form-data')
  @UsePipes(ValidationPipe)
  @UseInterceptors(
    FileInterceptor('image_blob', {
      storage: diskStorage({
        destination: Helper.destinationPath,
        filename: Helper.customFileName
      })
    })
  )
  public async createFragment(
    @UploadedFile() file,
    @Body() createNewDto: CreateNewDto
  ) {
    const fragment = {
      ...createNewDto,
      image: `${DOMAIN_NAME}/files/${file.filename}`
    };

    return this.newsService.add(fragment);
  }
}
