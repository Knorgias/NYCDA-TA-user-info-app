const fs = require('fs');

const users = JSON.parse(fs.readFileSync('users.json'));

module.exports = {
/**Returns all the users */
  getUsers: function() {
    return users;
  },

/**Returns a list of users based on the query- matching first or last names */
  searchUsers: function(query) {
    var results = [];

    users.forEach(function(user) {
      if (searchFirstName(query, user) || searchLastName(query, user)) {
        results.push(user);
      }
    });
    return results;
  },

/**Takes a new user object as input and adds it to the specified json file */
  addUser: function(userObject) {
    users.push(userObject);
    fs.writeFile('users.json', JSON.stringify(users), (error, data) => {
      if (error) {
        throw error;
      }
    });
  }
};

/**Method that returns all the user first names that include the given string */
function searchFirstName(input, user) {
  return user.firstname.toLowerCase().includes(input.toLowerCase());
}

/**Method that returns all the user last names that include the given string */
function searchLastName(input, user) {
  return user.lastname.toLowerCase().includes(input.toLowerCase());
}
