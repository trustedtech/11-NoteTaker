//Required utilities and data 
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

//Exporting an anonymous function for immediate execution
module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        //console.log('Executing GET request on "/api/notes" route');
        res.json(db);
    });

    app.post("/api/notes", function(req, res) {
        //console.log('Executing POST request on "/api/notes" route');
        const note = req.body;
        
        //Generates a modified timestamp to use as an ID for the note
        note.id = (new Date().toISOString().split('.')[0]).replace(/[-:]/g, "");
        publishNote(note);
        res.json(note);
    });

    app.delete("/api/notes/:id", function(req, res) {
        //console.log('Executing DELETE request on "/api/notes" route');
        const target = req.params.id;
        //console.log(target);
        const revised = db.filter(function(item) {
            if (item.id != target) { return true; }
            else { return false; }
        });
        rewriteDB(revised);
        res.json(db);
    });
}

//Sequence for publishing a new note 
function publishNote(note) {
    db.push(note);
    rewriteDB(db);
    console.log("Note " + note.id + " published.");
}

//Rewrites database of saved notes
function rewriteDB(rwdb) {
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(rwdb),          
    function(err) { if(err) console.log(err); });
}

//     return note.id === req.params.id;
// });
// db.splice(target, 1);   
// rewriteDB();
// res.json(db);
// });


// Function for generating random unique IDs
// const generateID = function() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }
// note.id = generateID();