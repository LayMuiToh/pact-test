// ./pact/setup.js
// To configure the Pact mock provider
const path = require('path');
const { Pact } = require('@pact-foundation/pact');


global.port = 8080;
global.host = '127.0.0.1';

global.Platform = new Pact({
  cors: true,
  port: global.port,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  loglevel: 'debug',
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  pactfileWriteMode: 'update',
  consumer: 'UI Client',
  provider: 'Platform Services',
  host: global.host,
});
