import { IsEmail, IsNotEmpty, isEmail } from 'class-validator';
import { IsImage } from 'src/validator/ImageValidator';

export class CreateUserDto {
  @IsNotEmpty()
  fistname: string;
  @IsNotEmpty()
  lastname: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  // @IsImage()
  // image: File;
}

export class CreateUserResponseDto {
  id: number;
  fistname: string;
  lastname: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}