const express = require('express'),
      fs = require('fs'),
      router = express.Router(),
      app = express();

const displayUsers = require('./../user-reader');


router.get('/', (request, response) => {
  response.render('search/search');
});

router.post('/', (request, reponse) => {
  reponse.redirect('/search/' + request.body.query);
});


router.get('/:query', (request, response) => {
  var results = displayUsers.searchUsers(request.params.query);
  console.log('RESULTS ARE:');
  console.log(request.params.query);

  response.render('search/show-users', { results: results });

});

module.exports = router;
