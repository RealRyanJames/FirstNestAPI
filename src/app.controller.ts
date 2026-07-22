import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface IClient {
  getClient(): string;
  getUpperCase(str: string): string;
}

interface InfoStates {

  state: string;
  city: string;
  pop: number;
  is_capital(): boolean;
  get_pop(pop: number): number | string;

  isState(): boolean;
  getState(): string;

  is_big_population(population: number): boolean;
}

class StatesInfo implements InfoStates {

  pop: number;
  state: string;
  city: string;

  constructor(state: string, city: string) {
    this.city = city;
    this.state = state;
  }

  public is_big_population(population: number): boolean {

    if (this.get_pop(population) == this.pop) {
      return true;
    }

    return false;
  }

  public get_pop(pop: number): number | string {
    if (this.pop == pop) {
      return String(`Currently Population is: ${this.pop}`);
    }

    return String(`Currently Population is: ${this.pop}`);
  }


  getStateMAPopulation(): string | number {
    if (this.pop == this.get_pop(this.pop)) {
      return this.pop;
    }

    return this.pop;
  }

  public getState(): string {
    return this.state;
  }

  public getCity(): string {
    return this.city;
  }

  public is_capital(): boolean {

    if (this.city == this.getCity()) {
      return true;
    }

    return false;
  }


  isState(): boolean {
    if (this.state === '' && this.city === '') {
      return false;
    }

    return true;
  }

}

@Controller()
export class AppController implements IClient {

  getClient(): string {
    return 'Hello I am Amazing People';
  }

  getUpperCase(str: string): string {
    return str.toUpperCase();
  }

  constructor(private readonly appService: AppService) { }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/states/MA')
  getStateMA() {
    const state = new StatesInfo('MA', 'Boston');
    if (state.getState()) {
      console.log('State is Initialized');
    }
    return `

          ${this.getUpperCase(state.getState())}
          ${this.getUpperCase(state.getCity())}
          ${state.is_capital()}
      `;
  }

  @Get('/state/MA/pop')
  getPop() {
    const state = new StatesInfo('MA', 'Boston');
    return `
      Population of ${state.getState()} is
      ${state.getStateMAPopulation()}`;
  }

  @Get('/Amazing')
  getMessage() {
    return this.getUpperCase(this.getClient());
  }
}
