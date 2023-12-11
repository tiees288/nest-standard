import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

const MulterUplaoModule = MulterModule.register({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      // กำหนดชื่อไฟล์ด้วยตนเอง
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileExtension = file.originalname.split('.').pop();
      cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
    },
  }),
});

export { MulterUplaoModule };
