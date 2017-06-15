const mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  category: {
    type: [String],
    require: true
  },
  author: {
    type: String,
    ref: "User",
    require: true
  }

});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
