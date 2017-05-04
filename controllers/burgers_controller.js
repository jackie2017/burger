var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerModel = require("../models/burger.js");

// Making all our routes to read, create and update our burgers,and set up logic.
// the get will retrieve all the burger info and display it on the homepage.
router.get("/", function(req, res) {
  //  Use burgerModel Method (all)to get burger info from db.
  burgerModel.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    //Display index page with the burger info from db
    res.render("index", hbsObject);
  });
});
//POST route will create the burger
router.post("/", function(req, res) {
  //Use burgerModel method (create) to create a burger in the db.
  burgerModel.create([
    "name", ""
  ], [
    req.body.name, req.body.newBurger
  ], function() {
    //Redirect user to homepage
    res.redirect("/");
  });
});
//PUT will update the burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  //use burgerModel method (update) to update a burger in the db
  burgerModel.update({
    newBurger: req.body.newBurger
  }, condition, function() {
    //Redirect user to homepage
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
