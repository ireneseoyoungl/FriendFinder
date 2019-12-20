const express = require('express');
const Router = express.Router();
const friends = require('../data/friends');

Router.get('/', (req, res) => {
  res.send(friends);
});

Router.post('/', (req, res) => {
  const newFriend = req.body;
  friends.push(newFriend);
  res.send(friends);
});

module.exports = Router;
