const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

//Function for generating random unique IDs
const generateID = function() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
//note.id = generateID();

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        console.log('Executing GET request on "/api/notes" route');
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        console.log('Executing POST request on "/api/notes" route');


    });

    app.delete("/api/notes", function(req, res) {
        console.log('Executing DELETE request on "/api/notes" route');

    });
}







