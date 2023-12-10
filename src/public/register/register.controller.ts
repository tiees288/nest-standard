import { Controller, Get, Post, Res, Header, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'src/public/register/register.email.dto';

@Controller('register')
export class RegisterController {
  @Post('email')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 2 },
    ]),
  )
  registerByEmail(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() req: CreateUserDto, @Res() res) {
    console.log('Request', req);
    console.log('Files', files);
    return res.status(200).json({
      message: 'User created',
      data: req,
    });
  }
}
