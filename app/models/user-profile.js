var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserProfileSchema = new Schema({
    // id: {type: String, default: '1'},
    username: String,
    saltDb: String,
    password: String,
    lastLogin: {type: Date, default: Date.now},
    profile: {
        firstname: String,
        lastname: String,
        email: String
    }
});

// ArticleSchema.virtual('date')
//   .get(function(){
//     return this._id.getTimestamp();
//   });

mongoose.model('UserProfile', UserProfileSchema);
