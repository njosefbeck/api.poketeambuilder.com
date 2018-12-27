const express = require('express');
const v1 = express.Router();
const pkmn = require('../pokemon/controller');

// catch all
function notFound (req, res) {
  res.status(404).send('404');
}

v1.all('/', notFound);
v1.get('/pokemon', pkmn.handleQuery, pkmn.get);

module.exports = v1;