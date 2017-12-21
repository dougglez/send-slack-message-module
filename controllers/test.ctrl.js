const axios = require('axios');
const { slackHook } = require('../config/default.config');

module.exports = (req, res, next) => {
  for(let key in req) {
    console.log(`\n======================\nThis is the stuff inside ${key}:`,req[key]);
  }
  console.log('Req Keys:', Object.keys(req));

  res.status(200).send('Staaaahhhhpppp');
};