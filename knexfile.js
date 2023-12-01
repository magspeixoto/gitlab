module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'mysecretpassword',
      database: 'pessoal',
      port: '9100',
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
