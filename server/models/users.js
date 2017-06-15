const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    unique: true
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
