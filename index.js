/**Create an express application */
const express = require('express'),
			pug = require('pug'),
			morgan = require('morgan'),
			bodyParser = require('body-parser'),
			fs = require('fs');

const app = express();
		userStore = require('./user-reader');

/**Create route objects from the modules */
const 	userRoutes = require('./routes/users'),
		searchRoutes = require('./routes/search'),
		addRoutes = require('./routes/add-user');

/**Set pug as the view engine */
app.set('view engine', 'pug');

/**Set to use the public folder */
app.use(express.static('./public'));

/**Set to use the morgan module */
app.use(morgan('dev'));

/**To be seen */
app.use(bodyParser.urlencoded({ extended: false }));

/**Use the created routes objects within our app */
app.use('/users', userRoutes);

app.use('/search', searchRoutes);

app.use('/add-user', addRoutes);

/**Get request in root with callback function */
app.get('/', (request, response) => {
	response.render('index', { users: userStore.getUsers() });
});

/**Get request in  /api/search/* with results given to res as json */
app.get('/api/search/*', (req, res) => {
  var results = userStore.searchUsers(req.params[0]);
  res.json(results);
});

/**Define the port of our app and trigger a custom function */
app.listen(3000, function() {
 console.log('Web server started on port 3000');
});
