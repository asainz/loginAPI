var mongoose = require('mongoose'),
    UserModel = mongoose.model('User');

exports.login = function(req, res){
    res.render('user/login');
};

exports.profile = function(req, res){
    if( req.session.loggedIn ){
        res.render('user/profile', {
            username: req.session.user.username
        });
    }else{
        res.redirect('/login');
    }
};

exports.register = function(req, res){
    res.render('user/register');
};

exports.doRegister = function(req, res){
    var user = new UserModel({
        username: req.body.username,
        password: req.body.password,
        saltDb: '123',
        profile: {
            firstname: '',
            lastname: '',
            email: ''
        }
    }).save(function(err, user){
        if(err){
            console.log('error: ', err);
            return;
        }
        console.log(user);
        req.session.loggedIn = true;
        req.session.user = {username: user.username, password: user.password};

        res.redirect( '/profile' );
    });
};