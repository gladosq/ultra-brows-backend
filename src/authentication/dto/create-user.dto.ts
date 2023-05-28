import {IsEmail, IsNotEmpty} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique e-mail address',
    example: 'user@user.ru',
  })
  @IsEmail({}, { message: 'Не корректный e-mail' })
  public email: string;

  @ApiProperty({type: 'string', format: 'string', required: true})
  @IsNotEmpty()
  name: string;

  @ApiProperty({type: 'string', format: 'string', required: true})
  @IsNotEmpty()
  password: string;
}
