const express = require('express'),
      fs = require('fs'),
      router = express.Router();

var displayUsers = require('./../user-store');

router.get('/', (request, response) => {
  response.render('users/add-user');
});

router.post('/', (request, response) => {
  console.log(request.body);
  console.log(request.params);
  console.log(request.query);
  displayUsers.addUser(request.body);
  response.redirect('/');
});

module.exports = router;
