import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.APP_PORT || 5428;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => console.log(`App started on ${PORT} port!`));
  } catch (error) {
    console.log(error);
  }
};

start();
