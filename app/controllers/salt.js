var sha1 = require('sha1');
var randomString = require('random-string');

exports.create = function(){
    var salt = randomString({
        length: 32
    });

    return sha1(salt);
};