const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
  console.log(req);
  res.send('success');
});

module.exports = Router;
