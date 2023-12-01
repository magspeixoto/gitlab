const ValidationError = require('../errors/validationErrors');

module.exports = (app) => {
  const findAll = () => {
    return app.db('users').select();
  };

  const save = (user) => {
    if (!user.name) throw new ValidationError('Nome obrigatório');
    if (!user.email) throw new ValidationError('Email obrigatório');
    if (!user.password) throw new ValidationError('Password obrigatória');

    const userDb = findAll({ email: user.email });
    if (userDb && userDb.length > 0) return { error: 'Email duplicado na BD' };
    return app.db('users').insert(user, '*');
  };

  /* const update = (id, user) => {
    return app.db('users')
      .where({ id })
      .update(user, '*');
  };

  const remove = (id) => {
    return app.db('users')
      .where({ id })
      .del();
  }; */
  return {
    findAll, save, /* , update, remove, */
  };
};
