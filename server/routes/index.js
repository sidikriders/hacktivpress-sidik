var express = require('express');
var router = express.Router();

const userCont = require('../controller/userController');
const artCont = require('../controller/articleController');

/* GET home page. */
router.post('/signup', userCont.signUp);
router.post('/signin', userCont.signIn);

router.get('/', artCont.getAll)
router.get('/article/:id', artCont.getOne)
router.post('/article/new', artCont.createNew)
router.put('/article/:id', artCont.editOne)
router.get('/article/by-category', artCont.byCategory)
router.get('/article/by-author', artCont.byAuthor)

module.exports = router;
