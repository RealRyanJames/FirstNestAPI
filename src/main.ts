import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

interface PortObjects {

  getProt(port: number): number;
}

class PortsCreated implements PortObjects {
  public getProt(port: number): number {
    return port;
  }
}

async function bootstrap() {

  const port = new PortsCreated();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? port.getProt(3000));
}

async function getMain() {
  await bootstrap();
}

getMain().catch((_) => console.log(_));
