import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.fotRoot('mongodb://petshop:p3tsh0p@ds050869.mlab.com:50869/rock-auth'),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
