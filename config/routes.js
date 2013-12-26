module.exports = function(app){
    var user = require('../app/controllers/user');
    var home = require('../app/controllers/home');

    app.get('/', home.index);

    app.get('/login', user.login);
    app.post('/login', user.doLogin);

    app.get('/register', user.register);
    app.post('/register', user.doRegister);

    app.get('/profile', user.profile);
    // app.put('/profile', user.updateProfile);
    // app.delete('/profile', user.deleteProfile);

    // app.post('/logout', user.doLogout);
};
