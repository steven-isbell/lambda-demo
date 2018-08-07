const serverless = require('serverless-http');
const api = require('./api');

module.exports.handler = serverless(api);
