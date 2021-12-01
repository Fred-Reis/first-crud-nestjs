import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherController } from './other/other.controller';
import { OtherService } from './other/other.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    OrdersModule,
    // TO USE SQLITE
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   models: [Order],
    //   autoLoadModels: true,
    // }),

    // TO USE MYSQL
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      database: 'fin',
      username: 'root',
      password: 'root',
      models: [Order],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController, OtherController],
  providers: [AppService, OtherService],
})
export class AppModule {}
