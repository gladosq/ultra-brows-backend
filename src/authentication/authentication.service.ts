import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {CreateUserDto} from './dto/create-user.dto';
import {Users} from '../typeorm';
import {SALT_ROUNDS} from '../../const/const';
import {compare, genSalt, hash} from 'bcrypt';
import {LoginUserDto} from './dto/login-user.dto';
import {User} from '../../types/user';
import {TokenPayload} from '../../types/token-payload';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService
  ) {
  }

  public passwordHash: string;

  public async createNewUser(createUserDto: CreateUserDto) {
    const {email, name, password} = createUserDto;

    const existUser = await this.userRepository.find({
      where: {email: email}
    });

    if (existUser.length) {
      throw new ConflictException('User with this email exists');
    }

    const hashPassword = await this.setPassword(password);
    const userData = {name, email, password: hashPassword};

    const newUser = this.userRepository.create(
      userData
    );

    await this.userRepository.save(newUser);
    return {name: newUser.name};
  }

  public async verifyUser(loginUserDto: LoginUserDto) {
    const {email, password} = loginUserDto;

    const existUser = await this.userRepository.find({
      where: {email: email}
    });

    if (!existUser.length) {
      throw new NotFoundException('User not found');
    }

    this.passwordHash = existUser[0].password;

    if (!await this.comparePassword(password)) {
      throw new UnauthorizedException('User password is wrong');
    }

    return {...existUser[0]};
  }

  public async setPassword(password: string) {
    const salt = await genSalt(SALT_ROUNDS);
    return this.passwordHash = await hash(password, salt);
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public async createUserToken(user: User) {
    const payload: TokenPayload = {
      sub: user.user_id,
      email: user.email,
      name: user.name
    };

    return {
      accessToken: await this.jwtService.signAsync(payload)
    };
  }
}
