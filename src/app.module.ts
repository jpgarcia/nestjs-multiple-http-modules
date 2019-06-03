import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    HttpModule.registerAsync({
      useFactory: async () => ({
        baseURL: 'https://docs.nestjs.com',
      }),
    }),
    HttpModule.registerAsync({
      useFactory: async () => ({
        baseURL: 'https://github.com',
      }),
    }),
  ],
})
export class AppModule {}
