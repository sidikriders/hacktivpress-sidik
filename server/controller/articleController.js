const Article = require('../models/article.js');

function getAll(req, res, next) {
  Article.find({}, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(response)
    }
  })
}

function getOne(req, res, next) {
  Article.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(response)
    }
  })
}

function createNew(req, res, next) {
  Article.create({
    title: req.body.newTitle,
    content: req.body.newContent,
    category: req.body.newCategory,
    author: req.body.newAuthor
  }, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      console.log(response);
      res.send('berhasil buat')
    }
  })
}

function editOne(req, res, next) {
  Article.create(req.body, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send('berhasil update')
    }
  })
}

function byCategory(req, res, next) {
  Article.find({
    category: req.body.category
  }, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(response)
    }
  })
}

function byAuthor(req, res, next) {
  Article.find({
    author: req.body.author
  }, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(response)
    }
  })
}

module.exports = {
  getAll,
  getOne,
  createNew,
  editOne,
  byCategory,
  byAuthor
}
