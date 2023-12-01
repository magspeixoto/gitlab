const bcrypt = require('bcrypt-nodejs');
const ValidationError = require('../errors/validationErrors');

module.exports = (app) => {
  const findAll = () => {
    return app.db('users').select();
  };
  const findOne = (filter = {}) => {
    return app.db('users').where(filter).first();
  };

  const GetPasswdHash = (passwd) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(passwd, salt);
  };

  const save = async (user) => {
    if (!user.name) throw new ValidationError('Nome obrigatório');
    if (!user.email) throw new ValidationError('Email obrigatório');
    if (!user.password) throw new ValidationError('Password obrigatória');

    const userDb = await findAll({ email: user.email });
    if (userDb) throw new ValidationError('Email duplicado na BD');

    const newUser = { ...user };
    newUser.password = GetPasswdHash(user.password);
    return app.db('users').insert(newUser, ['id', 'email', 'name']);
  };
  return { findAll, save, findOne };
};
