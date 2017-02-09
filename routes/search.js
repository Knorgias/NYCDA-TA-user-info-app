/**Create an app express object and a router express.Router object */
const express = require('express'),
      fs = require('fs'),
      router = express.Router(),
      app = express();

/**Create userStore object from custom user-reader module */
const userStore = require('./../user-reader');

/**Define the render file for get requests from root */
router.get('/', (request, response) => {
  response.render('search/search-users');
});

/**Define the redirect file for post requests from root */
router.post('/', (request, reponse) => {
  reponse.redirect('/search/' + request.body.query);
});

/**Define the render file for get requests from root with a parameter :query*/
router.get('/:query', (request, response) => {
  var results = userStore.searchUsers(request.params.query);
  console.log('RESULTS ARE:');
  console.log(request.params.query);

  response.render('search/show-results', { results: results });

});

/**Export router object as a module */
module.exports = router;
