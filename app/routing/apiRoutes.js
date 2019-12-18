const express = require('express');
const Router = express.Router();
const friends = require('../data/friends');

Router.get('/', (req, res) => {
  res.send(friends);
});

module.exports = Router;
