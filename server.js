
//Your server.js file should require the basic npm packages
// we've used in class: express, body-parser and path (path in htmlRoutes.js)
var express = require("express");
var bodyParser = require("body-parser");

//link to our modules
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// declare express and PORT
var app = express();
var PORT = process.env.PORT || 3000;

// to accommodate json
app.use(bodyParser.json());
// to accommodate form data
app.use(bodyParser.urlencoded({extended: true}));

// call our modules
apiRoutes(app);
htmlRoutes(app);

// start the listener
app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
});
