const express = require('express');

const decorate = require('./middleware/decorator.middleware');
const sendMessage  = require('./controllers/message.ctrl');

const { PORT } = require('./config/default.config');
const app = express();

decorate(app);

app.post('/api/sendmessage', sendMessage);

app.listen(PORT, () => {
  console.log('Ready for some dope cat facts');
});