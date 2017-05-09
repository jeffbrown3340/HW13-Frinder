var friends = require("../data/friends.js");
// var waitingList = require("../data/waitinglistData.js");
var path = require("path");


module.exports = function(app) {

	// app.get("/api",function(req,res){
	// 	return res.send("api");
	// });

	app.get("/api/friends",function(req,res){
		return res.json(friends);
	});

	// app.get("/api/tables/:cID?", function(req, res) {
	// 	var cID = req.params.cID;
	// 	console.log("/api/tables/" + cID);
	// 	for (var i = 0; i < tables.length; i++) {
	// 		if (cID === tables[i].customerID) {
	// 			console.log("if loop (" + cID + " === " + tables[i].customerID + ")=", cID, tables[i].customerID);
	// 			return res.json(tables[i]);
	// 		}
	// 	}
	// 	return res.send("No table found for " + cID);
	// });

	// app.get("/api/waitlist",function(req,res){
	// 	return res.json(waitingList);
	// });

	// app.get("/api/waitlist/:cID?", function(req, res) {
	// 	var cID = req.params.cID;
	// 	for (var i = 0; i < waitingList.length; i++) {
	// 		if (cID === waitingList[i].customerID){
	// 			return res.json(waitingList[i]);
	// 		}
	// 	}
	// 	return res.send("No Waiting List item found for " + cID);
	// });

	app.post("/api/friends", function(req, res){
		// var newTable = req.body;
		// var myNewFriend = {"name": "Isaac", "photo": "../data/isaac.JPG"};
		var myNewFriend = {"name": "Isaac", "photo": path.join(__dirname, "../data/isaac.JPG")};
		// newTable.customerID = newTable.customerID.replace(/\s+/g, "");
		// tables.push(newTable);
		res.json(myNewFriend);
	});
}
