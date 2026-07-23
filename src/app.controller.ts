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
  pop: number = 0;
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
    if (this.state != '' && this.city != '') {
      return true;
    }

    return false;
  }
}

enum StateDefective {
  NH,
  MAINE,
  MA,
  CALI,
}

enum StateCapital {
  BOSTON,
  AUGUSTA,
  CONCORD,
  SACCROMENTO,
}

interface IStateObject {
  getSateName(state: StateDefective): StateDefective;
  getCapital(state: StateCapital): StateCapital;
}

class States implements IStateObject {
  getCapital(state: StateCapital): StateCapital {
    return state;
  }

  getSateName(state: StateDefective): StateDefective {
    return state;
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

  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/states/MA')
  getStateMA() {
    const state = new StatesInfo('MA', 'BOSTON');

    return `
 
      State: ${state.getState()} : City: ${state.getCity()}
    `;
  }

  @Get('/state/MA/pop')
  getPop() {
    const state = new States();

    const states = state.getSateName(StateDefective.MA);
    const stateCap = state.getCapital(StateCapital.BOSTON);

    if (states == StateDefective.MA && stateCap == StateCapital.BOSTON) {
      console.log('Populion of MA was Found');
    }

    return `

          ${this.getUpperCase(states.toString())}
          ${this.getUpperCase(stateCap.toString())}
          ${this.getUpperCase(String(stateCap))}
      `;
  }

  @Get('/states/NH')
  getStateNH() {
    const stateNH = new StatesInfo('NH', 'Concord');

    if (stateNH.isState()) {
      return `
 
      State: ${stateNH.getState()} : City: ${stateNH.getCity()}
    `;
    }
  }

  @Get('/states/Maine')
  getStateMaine() {
    const stateMaine = new StatesInfo('Maine', 'Augusta');

    if (stateMaine.isState()) {
      return `
 
      State: ${stateMaine.getState()} : City: ${stateMaine.getCity()}
    `;
    }
  }

  @Get('/Amazing')
  getMessage() {
    return this.getUpperCase(this.getClient());
  }
}
