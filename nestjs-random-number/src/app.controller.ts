import { Controller, Post } from '@nestjs/common';

@Controller('random-number')
export class AppController {
  @Post()
  getRandomNumber(): { value: number } {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    return { value: randomValue };
  }
}
