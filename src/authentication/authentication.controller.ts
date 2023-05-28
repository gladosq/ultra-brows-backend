import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthenticationService} from './authentication.service';
import {CreateUserDto} from './dto/create-user.dto';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {LoginUserDto} from './dto/login-user.dto';
import {LoggedUserRdo} from './rdo/logged-user.rdo';

@ApiTags('Users')
@Controller('user')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {
  }

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.authenticationService.createNewUser(createUserDto);
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.'
  })
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() loginUserDto: LoginUserDto) {
    const verifiedUser = await this.authenticationService.verifyUser(loginUserDto);
    const loggedUser = await this.authenticationService.createUserToken(verifiedUser);
    const {password, ...newResponse} = verifiedUser;
    return {...newResponse, ...loggedUser};
  }
}
