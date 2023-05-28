import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import entities from './typeorm';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {AuthenticationModule} from './authentication/authentication.module';
import {UtilitiesModule} from './utilities/utilities.module';
import {NewsModule} from './news/news.module';
import {FileModule} from './file/file.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../uploads')
    }),
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    AuthenticationModule,
    UtilitiesModule,
    NewsModule,
    FileModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
