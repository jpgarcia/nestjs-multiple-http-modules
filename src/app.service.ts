import { HttpService } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private http1: HttpService, private readonly http2: HttpService) {
    console.log('HttpService Instance #1', http1);
    console.log('HttpService Instance #2', http2);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
