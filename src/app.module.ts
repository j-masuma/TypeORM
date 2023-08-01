import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3600,
      username: 'postgres',
      password: '1234',
      database: 'fleetdb',
      entities: ['dist/**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    UsersModule,
    DriversModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
