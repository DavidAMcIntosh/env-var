import {get} from '@loopback/rest';

export class EnvController {
  constructor() {}

  //tslint:disable no-any
  @get('/env')
  env(): any {
    let retVal: String = '';
    retVal = 'The value of PORT is:' + process.env.PORT + '. \n';
    retVal += 'The value of USERNAME is:' + process.env.USERNAME + '. \n';
    retVal += 'The value of PASSWORD is:' + process.env.PASSWORD + '.';
    return retVal;
  }
}
