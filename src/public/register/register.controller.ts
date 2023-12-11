import {
  Controller,
  Get,
  Post,
  Res,
  Header,
  UseInterceptors,
  UploadedFiles,
  MaxFileSizeValidator,
  ParseFilePipe,
  FileTypeValidator,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { Body, UsePipes } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'src/public/register/register.email.dto';

@Controller('register')
export class RegisterController {
  @Post('email')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }], {
    limits: {
      fileSize: 1024 * 1024 * 1,
    },
  }))
  registerByEmail(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg',
        })
        .addFileTypeValidator({
          fileType: 'png',
        })
        .addMaxSizeValidator({
          maxSize: 1024 * 1024 * 1,
        })
        .build({
          errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        }),
    )
    files: Array<Express.Multer.File>,
    @Body() req: CreateUserDto,
    @Res() res,
  ) {
    const fileList: any[] = (files as Record<string, any>)
      ?.image as Express.Multer.File[];
    return res.status(200).json({
      message: 'User created',
      data: req,
    });
  }
}
