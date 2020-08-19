var express = require("express");

var router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all( (db_data) => {
        let burgerHBSObj = {
            burgers: db_data
        }
        console.log("burgerHBSObj: ", burgerHBSObj);
        res.render("index", burgerHBSObj);
    });
});

router.post("/api/newburger", function (request, response) {
    burger.create( request.body.burger_name, (result) => {

        response.json({id: result.insertId});
        console.log("Newly added ID: ", result.insertId);
    });
});

router.put("/api/update", function (request, response) {
    console.log(request.body.id);
    burger.update( request.body.id, (result) => {
        response.json({id: result.insertId});
        console.log("Updated ID: ", result.insertId);
    });
});

module.exports = router;