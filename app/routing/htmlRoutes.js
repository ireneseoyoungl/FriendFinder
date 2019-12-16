const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = Router;
