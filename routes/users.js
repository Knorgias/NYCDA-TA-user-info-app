const express = require('express'),
      fs = require('fs'),
      router = express.Router();

var userStore = require('./../user-reader');

router.post('/', (request, response) => {
  userStore.addUser(request.body);
  response.redirect('/');
});

router.get('/new', (request, response) => {
  response.render('users/new');
});

module.exports = router;
