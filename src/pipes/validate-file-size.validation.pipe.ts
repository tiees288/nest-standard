import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform<Express.Multer.File> {
  constructor (private readonly limit: number = 1024 * 1024) {}

  transform(file: Express.Multer.File, metadata: ArgumentMetadata): Express.Multer.File {
    const fileList: any[] = (file as Record<string, any>).image as Express.Multer.File[];
    const totalSize = fileList?.reduce((acc, curr) => acc + curr.size, 0) || 0;
    if (totalSize > 0 && totalSize > this.limit) {
      console.log(`Total size: ${totalSize} bytes limit: ${this.limit}`);
      throw new BadRequestException('File size is too large!');
    }
    return file;
  } 
}
