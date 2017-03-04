var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('model messages get');
      // db.connect();
      db.query('select * from messages', [], function(err, rows, fields) {
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
         
          
        }
      });

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

