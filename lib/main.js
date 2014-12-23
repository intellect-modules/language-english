var _ = require("underscore");


var Main = function( options ){
	// fallbacks
	options = options || {};
	// variables
	var self = this;

	// middleware
	return function(req, res, next){
		self.request( req, res );
		self.response( req, res );
		next();
	};

	return this;
}

Main.prototype = {

	// logic used to interpret a message
	request: function( req, res ){
		// assume the data is always an equation for now...
		//req.types.push("");
	},

	// logic used to filter the response
	response: function( req, res ){
		// for simplicity assumming string is "clean"
		//res.results.language = "";
		// add tags
		//res.tags.push("numeric");
	}

}

module.exports = function( options ){
	return new Main( options );
}