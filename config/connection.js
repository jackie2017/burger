// Set up MySQL connection.
var mysql = require("mysql");

var connection;
//need for Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Begin2017",
        database: "burgers_db"
    });
}
//or use local server if not heroku
connection.connect();

module.exports = connection;


/* Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
*/
