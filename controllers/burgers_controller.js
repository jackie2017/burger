var express = require("express");

var orm = require("../config/orm");

module.exports = function (app) {
    app.get("/", function (req, res) {

        orm.selectAll(function (data) {
          //PUT will update the burger
            res.render("index", {result: data});
        });

    });


    app.put("/add", function (req, res) {
        console.log(req.body);
        var date = new Date();
      
        orm.insertOne(req.body.burger_name, true, date);
        res.redirect("/");
    });
     //PUT will update the burger 
    app.put("/:id", function (req, res) {
        console.log(req.params.id);
      //Redirect user to homepage
        orm.updateOne(req.params.id);
        res.redirect("/");

    });
};

// Export routes for server.js to use.
module.exports = router;
