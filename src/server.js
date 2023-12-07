const config = require('./config');

const app = require('./app');

app.listen(config.NODE_PORT, () => {
  // console.log(`APP LISTENING ON: ${config.NODE_PORT}`);
});

/* const app = require('./app');

app.listen(3001); */

/* const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(3001); */
