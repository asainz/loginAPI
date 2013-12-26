var mongoose = require('mongoose'),
    UserProfile = mongoose.model('UserProfile');

exports.createProfile = function(req, res){
    var profile = new UserProfile({
        username: 'gege',
        saltDb: '123123123123123123',
        password: '21323csdsad213',
        profile: {
            firstname: 'andres',
            lastname: 'sainz',
            email: 'andressainz@gmail.com'
        }
    });
    profile.save();

    res.render('home/greetings');
  // Article.find(function(err, articles){
  //   if(err) throw new Error(err);
  //   res.render('home/index', {
  //     title: 'Generator-Express MVC',
  //     articles: articles
  //   });
  // });
};