module.exports = function(app){

	//home route
	// var home = require('../app/controllers/home');
	// app.get('/', home.index);

    var user = require('../app/controllers/user');
    app.get('/', user.createProfile);

};
