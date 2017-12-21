const axios = require('axios');
const { slackHook } = require('../config/default.config');



module.exports = async (req, res, next) => {
  console.log('queries', req.query);
  const { message } = req.body;

  try {
    axios.post(slackHook, {"text": message});
    res.status(200).send(null);
  } catch (err) {
    console.log('err');
    console.log(err);
    res.sendStatus(418);
  }
}