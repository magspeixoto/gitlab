const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve('env', `${process.env.NODE_ENV}.env`),
});

/* console.log(path.resolve('env', `${process.env.NODE_ENV}.env`));
console.log(`Directory: ${__dirname}`);
console.log(`KnexConfig / using environment: ${process.env.NODE_ENV}`);
console.log(`KnexConfig / Host: ${process.env.HOST}`);
console.log(`KnexConfig / Port: ${process.env.PORT}`);
console.log(`KnexConfig / DB: ${process.env.DB}`);
console.log(`KnexConfig / Pass: ${process.env.DBPASS}`);
console.log(`KnexConfig / Pass: ${process.env.DBUSER}`); */

module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      user: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DB,
      port: process.env.PORT,
    },
    debug: false,
    migrations: {
      directory: 'src/migrations',
    },
    pool: {
      min: 0,
      max: 50,
      propagateCreateError: false,
    },
  },
};
