import {EnvVarApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {EnvVarApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new EnvVarApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`App exists at ${url}/env`);

  return app;
}
