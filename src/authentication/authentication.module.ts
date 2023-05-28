import {Module} from '@nestjs/common';
import {AuthenticationController} from './authentication.controller';
import {AuthenticationService} from './authentication.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Users} from '../typeorm';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {getJwtOptions} from '../../libs/get-jwt-options';
import jwtConfig from '../../libs/jwt.config';

const ENV_USERS_FILE_PATH = '.env';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [jwtConfig],
      envFilePath: ENV_USERS_FILE_PATH
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtOptions
    })
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
  exports: [AuthenticationService]
})
export class AuthenticationModule {
}
