module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };
  // eslint-disable-next-line consistent-return
  const create = async (req, res) => {
    const result = await app.services.user.save(req.body);
    return res.status(201).json(result[0]);
  };

  return { findAll, create };
};
