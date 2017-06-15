var express = require('express');
var router = express.Router();

const userCont = require('../controller/userController');

const Article = require('../models/article');


/* GET home page. */
router.post('/signup', userCont.signUp);
router.post('/signin', userCont.signIn);

router.get('/', function(req, res, next) {
  Article.find({}, function(err, response) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      if (response.length = 0) {
        res.send('Belum ada Artikel Blog yang di bagikan')
      } else {
        res.send(response)
      }
    }
  })
})

router.get('/article/:id', function(req, res, next) {
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
})

router.post('/article/new', function(req, res, next) {
  Article.create({
    
  })
})

module.exports = router;
