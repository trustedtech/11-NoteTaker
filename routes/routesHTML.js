const path = require("path");

module.exports = function(app) {

    app.get("/notes", function(req, res) {
        //console.log('Executing GET request on "/notes" route');
        //res.send('The notes page is working!');
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //The default route (below) must be syntactically and sequentially last among routes, otherwise it will prevent subsequent routes
    app.get("*", function(req, res) {
        //console.log('Executing GET request on "*" route');
        //res.send('The default page is working!');
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}