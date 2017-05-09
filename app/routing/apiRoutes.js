// life requires friends doesn't it?
var friends = require("../data/friends.js");

// modules need to export something
module.exports = function(app) {

	//for the links bottom of page to show new values pushed
	app.get("/api/friends",function(req,res){
		return res.json(friends);
	});

	// A POST routes /api/friends. 
	// This used to handle incoming survey results
	// This route will also be used to handle the compatibility logic
	app.post("/api/friends", function(req, res){
		// score users calculated diff between new user and existing
		function scoreUser(user, friend){
			var thisScore = 0;
			for (var x = 0; x < user.scores.length; x++) {
				//Remember to use the absolute value of the differences
				thisScore += Math.abs(user.scores[x] - friend.scores[x]);
				console.log("thisScore, user.scores[x], friend.scores[x] =>", thisScore, user.scores[x], friend.scores[x]);
			}
			return thisScore;
		}
		var currScore, 
			myNewFriend,
			// intitalize high score to a number higher than
			// any possible actual score (high possible = 5 * 10 = 50)
			// so that one of the existing friends will always be chosen
			highScore = 51,
			userData = req.body;
		// compare the current user to all existing potential friends
		for (var i = 0; i < friends.length; i++ ){
			currScore = scoreUser(userData, friends[i]);
			console.log("i, currScore=", i, currScore);
			// if the current score is best make that my new friend
			if (currScore < highScore) {
				highScore = currScore;
				myNewFriend = friends[i];
			}
			console.log("myNewFriend.name = ", myNewFriend.name)
		}
		// put the new user into the mix for future use
		friends.push(userData);
		// send the new friend to the front end
		console.log("myNewFriend=", myNewFriend);
		res.json(myNewFriend);
	});
}
