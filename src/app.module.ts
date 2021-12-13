import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';


@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://santhiyaa:santhiyaa98@test.au30m.mongodb.net/nestjs?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
