var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("sdlfkjs;dlkf");
	console.log(data);
	name = req.query.name;
	description=req.query.description;
	newFriend=	{
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/500/500/people"	
		};

	data["friends"].push(newFriend);
	res.render("add", data);
	console.log(data);
	// Your code goes here
 }