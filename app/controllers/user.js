var mongoose = require('mongoose'),
    UserModel = mongoose.model('User'),
    salt = require('./salt'),
    password = require('./password');

exports.login = function(req, res){
    res.render('user/login', {
        invalidUsername: req.query.invalid === 'username',
        invalidPassword: req.query.invalid === 'password'
    });
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
    var saltDb = salt.create();

    var user = new UserModel({
        username: req.body.username,
        password: password.encode(req.body.password, saltDb),
        saltDb: saltDb,
        profile: {
            firstname: '',
            lastname: '',
            email: ''
        }
    }).save(function(err, user){
        if(err){
            console.log('error: ', err);

            if(err.code===11000){
                res.redirect( '/login?exists=true' );
            }else{
                res.redirect('/login?error=true');
            }

            return;
        }

        req.session.loggedIn = true;
        req.session.user = {username: user.username, password: user.password};

        res.redirect( '/profile' );
    });
};

exports.doLogin = function(req, res){
    //check if username exists
    //if exists, get saltDb and check password
    //if credentials are valid, go to profile
    //if credentials are invalid, show error

    UserModel.findOne({username: req.body.username}, function(err, user){
        if(err){
            console.log('error: ', err);
            res.refirect('/login?error=true');
            return;
        }

        if(!user){
            res.redirect('/login?invalid=username');
            return;
        }

        console.log(req.body.password);

        if( !password.validate(req.body.password, user.saltDb, user.password) ){
            res.redirect('/login?invalid=password');
            return;
        }

        req.session.loggedIn = true;
        req.session.user = {username: user.username, password: user.password};

        res.redirect( '/profile' );
    });
};