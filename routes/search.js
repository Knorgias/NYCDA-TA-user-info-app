const express = require('express'),
      fs = require('fs'),
      router = express.Router();

var userStore = require('./../user-reader');

router.get('/', (request, response) => {
  response.render('search/search-users');
});

router.post('/', (request, reponse) => {
  reponse.redirect('/search/' + request.body.query);
});

router.get('/:query', (request, response) => {
  var results = userStore.searchUsers(request.params.query);

  response.render('search/show-users', { results: results });
});

module.exports = router;
