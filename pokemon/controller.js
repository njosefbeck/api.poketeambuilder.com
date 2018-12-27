const Pokemon = require('./index');

module.exports = {
  handleQuery(req, res, next) {
    if (req.query.types === 'true') {
      req.pkmnMethod = Pokemon.getAllWithTypes;
    } else {
      req.pkmnMethod = Pokemon.getAll;
    }

    next();
  },

  async get(req, res) {
    try {
      const pkmn = await req.pkmnMethod();
      res.json(pkmn);

    } catch(e) {
      next(e);
    }
  }
};