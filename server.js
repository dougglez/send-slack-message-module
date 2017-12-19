const express = require('express');
const axios = require('axios');
const app = express();
const { PORT, catApiUrl } = require('./config/default.config');
const decorate = require('./middleware/decorator.middleware');
const { sendMessage } = require('./controllers/message.ctrl');
const test = require('./controllers/test.ctrl');

decorate(app);

// app.get('/api/fact', catFacts);
app.post('/api/sendmessage', sendMessage);
app.all('/api/test', test);


app.listen(PORT, () => {
  console.log('Ready for some dope cat facts');
});
