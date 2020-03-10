//Instantiate an express server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//Adds data parsing functionality, otherwise POST requests will error
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allows linking to static files like CSS and JS
app.use(express.static('public'));

//Import routes from separate files
require("./routes/routesAPI")(app);
require("./routes/routesHTML")(app);

//Start the express server
app.listen(PORT, function() {
  console.log("App is now listening on PORT: " + PORT);
});