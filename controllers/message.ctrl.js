const axios = require('axios');
const { catApiUrl, slackHook } = require('../config/default.config');

module.exports = {
  sendMessage
};

const getCatFacts = (req, res, next) => {
  // return axios.get(`http://${catApiUrl}/api/newfact`)
  return axios.get(`http://localhost:8081/api/newfact`)
    // .then(response => {
    //   res.status(200).send(response.data);
    // })
    // .catch(error => {
    //   console.log(error);
    //   res.sendStatus(418);
    // });
};

async function sendMessage(req, res, next) {
  console.log('queries', req.query);
  const { message } = req.body;

  try {
    axios.post(slackHook, {"text": message});
    res.sendStatus(200);
  } catch (err) {
    console.log('err');
    console.log(err);
    res.sendStatus(418);
  }

}