var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get');
      // res.on('end', function )
      var data;
      models.messages.get(function(rows) {
        // console.log('rows', rows);
        data = rows;
      });
      res.writeHead(200, {'Content-Type': 'application/json'});
      // console.log('received data', (data));
      res.on('data', function(chunk) {
        data += chunk;
        console.log(chunk);
      });
      res.end(data);
      // res.json(data);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.url);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

