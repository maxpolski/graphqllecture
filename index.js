require('babel-polyfill');
require('babel-register');

const generateMockData = require('./scripts/generateMockData').generate;
const launchServer = require('./server/index').launch;

generateMockData();
launchServer();
