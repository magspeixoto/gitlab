const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve('env', `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'test',
  NODE_PORT: process.env.NODE_PORT || '3001',
};
