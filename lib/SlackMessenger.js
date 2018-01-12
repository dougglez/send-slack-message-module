const axios = require('axios');

module.exports = class SlackMessenger {
  constructor(slackHook) {
    this.slackHook = slackHook;
  }

  sendMessage(message) {
    try {
      return axios.post(this.slackHook, {"text": message});
    } catch (err) {
      console.log(`Error on the next line:\n ${err}`);
    }
  }
};