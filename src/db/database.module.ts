import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sp0ngbik:12341234@habrback.ihedjh8.mongodb.net/',
    ),
  ],
})
export class DatabaseModule {}
