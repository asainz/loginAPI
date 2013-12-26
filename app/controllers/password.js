var sha1 = require('sha1');

exports.encode = function(password, saltDb){
    return sha1(saltDb + password);
};