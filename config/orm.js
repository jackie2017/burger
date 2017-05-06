// Import MySQL connection.
var connection = require("./connection");

//To retreive and store data
var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            cb(data);
        });

    },
    insertOne: function(name, devour, date) {
        connection.query("INSERT INTO burgers(burger_name, devour, date) VALUES(?, ?, ?)", [name, devour, date], function(err, data) {
            if (err) throw err;
            console.log("Data posted!!");
        });
    },
    updateOne: function(id) {
        connection.query("UPDATE burgers SET devour= false WHERE ID = ?", [id], function(err, data) {
            if (err) throw err;
            console.log("Data updated");

        });
    }
};

module.exports = orm;
