import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [
    UsersModule,
    PublicModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}