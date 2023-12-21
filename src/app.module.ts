import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicModule } from './public/public.module';
import { PrismaProvider } from './prisma/prisma.provider';

@Module({
  imports: [
    UsersModule,
    PublicModule,
  
  ],
  controllers: [AppController],
  providers: [AppService, PrismaProvider],
})

export class AppModule {}