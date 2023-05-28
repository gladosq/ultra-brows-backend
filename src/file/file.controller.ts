import {Controller, Get, Param, Res} from '@nestjs/common';

@Controller('files')
export class FileController {
  @Get(':fileName')
  async serveFile(@Param('fileName') fileName, @Res() res): Promise<any> {
    res.sendFile(fileName, {root: 'uploads'});
  }
}
