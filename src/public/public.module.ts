import { Module } from '@nestjs/common';
import { RegisterController } from './register/register.controller';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { MulterUplaoModule } from 'src/uploader/multer-upload.module';

@Module({
  imports: [
    MulterUplaoModule,
  ],
  controllers: [RegisterController],
})
export class PublicModule {}


