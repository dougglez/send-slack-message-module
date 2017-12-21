const axios = require('axios');

module.exports = class SlackMessenger {
  constructor(slackHook) {
    console.log('inside constructor',slackHook);
    this.slackHook = slackHook;
  }

  async sendMessage(message) {
    console.log('Sending Message via:', this.slackHook);
    try {
      return axios.post(this.slackHook, {"text": message});
    } catch (err) {
      console.log('err');
      console.log(err);
    }
  }


};