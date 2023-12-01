module.exports = (app) => {
  const findAll = (req, res, next) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => next(err));
  };
  // eslint-disable-next-line consistent-return
  const create = async (req, res, next) => {
    try {
      const result = await app.services.user.save(req.body);
      return res.status(201).json(result[0]);
    } catch (err) {
      return next(err);
    }
  };

  return { findAll, create };
};
