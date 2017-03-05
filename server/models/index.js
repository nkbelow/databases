var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('model messages get');
      // db.connect();
      db.query('SELECT * FROM messages', [], function(err, rows, fields) {
        if (err) {
          console.log('hello');
          console.log(err);
        } else {
          rows.forEach(function(row) {
            callback({
              'username': row.username,
              'text': row.messageBody,
              'roomname': row.roomname
            });
          });
          // console.log('rows', rows);
          // console.log('fuck ya');
          // console.log('fields', fields);
         // callback(rows);
          
        }
      });

    }, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO messages (username, messageBody, roomname) VALUES ("' + message.username 
        + '", "' + message.text + '", "' + message.roomname + '")', [], function(err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
          }
        });
    }
  // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username) {
      db.query('INSERT INTO user (username) VALUES ("' + message.username 
        + '")', [], function(err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(results);
          }
        });
    }
  }
};

