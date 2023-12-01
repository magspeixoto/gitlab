module.exports = (app) => {
/*   app.route('/auth/signin').post(app.routes.auths.signin);
  app.route('/auth/signup').post(app.routes.users.create); */

  app.route('/users')
    /* .all(app.config.passport.authenticate()) */
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);
  /* .put(app.routes.users.update)
    .delete(app.routes.users.remove); */
  /* app.route('/users/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.users.get)
    .put(app.routes.users.update)
    .delete(app.routes.users.remove); */
};
