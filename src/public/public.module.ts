import { Module } from '@nestjs/common';
import { RegisterController } from './register/register.controller';
import { MulterUplaoModule } from 'src/uploader/multer-upload.module';

@Module({
  imports: [
    MulterUplaoModule,
  ],
  controllers: [RegisterController],
})
export class PublicModule {}


