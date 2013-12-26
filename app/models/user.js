var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    // id: {type: String, default: '1'},
    username: {type: String, unique: true},
    saltDb: String,
    password: String,
    lastLogin: {type: Date, default: Date.now},
    profile: {
        firstname: String,
        lastname: String,
        email: String
    }
});

mongoose.model('User', UserSchema);
