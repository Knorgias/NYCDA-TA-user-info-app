const express = require('express'),
      fs = require('fs'),
      router = express.Router();

const displayUsers = require('./../user-reader');

router.get('/', (request, response) => {
  response.render('users/index');
});

module.exports = router;
