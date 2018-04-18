var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//Home route
router.get("/", function(req, res) {
    res.redirect("/api/burgers")
});
//Route for getting all burgers
router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        var burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});
//Route for add burger 
router.post("/api/burgers/create", function (req, res) {
    burger.create(
        
            req.body.burger_name,
        function (result) {
            // Send back the ID of the new burger
            res.json({ id: result.insertId });
        });
});
//Route for updating a burger
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



// Export routes for server.js to use.
module.exports = router;

