const express = require('express');
const app = express();
const v1 = require('./routes/v1');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/v1', v1);

module.exports = app;