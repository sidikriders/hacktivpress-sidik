const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

var server = require('../app')
var User = require("../models/users.js")
var Article = require("../models/article.js")
var should = chai.should()
var bcrypt = require('bcrypt');
const saltRounds = 10;

describe('User dan Article', () => {
  var user_id = '';
  var user_name = '';
  var article_id = '';
  beforeEach( () => {
    let newPass = bcrypt.hashSync("bungamerah", saltRounds)
    var newUser = new User({
      "username": "testUser",
      "password": newPass,
      "full_name": "Testing User"
    })

    newUser.save(() => {
      user_id = newUser._id
      user_name = newUser.username
    })
    var newArticle = new Article({
      title: "test artikel",
      content: "content test artikel",
      category: ["buah", "test", "apalah"],
      author: user_name
    })

    newArticle.save(() => {
      article_id = newArticle._id
    })
  })

  afterEach((done) => {
    User.remove({}, (err) => {
      Article.remove({}, err => {
        done()
      })
    })
  })

  describe('POST /signup', () => {
    it('should get response success create', () => {

      chai.request(server)
        .post('/signup') // methodnya bisa get atau post atau yg lainnya
        .send({
          newUser: "testSignUp",
          newPass: "TestSignUp",
          newFullName: "Test Sign Up"
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.text.should.equal('testSignUp berhasil di buat')
      })
    })
  })

  describe('POST /login', () => {
    it('should get response success login', () => {

      chai.request(server)
        .post('/signin') // methodnya bisa get atau post atau yg lainnya
        .send({
          username: "testUser",
          password: "bungamerah"
        })
        .end((err, res) => {
          console.log(res.text);
          res.should.have.status(200)
          res.text.should.equal('berhasil')
      })
    })
  })

  describe('GET /', () => {
    it('should get all article blog post', () => {

      chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
      })
    })
  })

  describe('GET article/:id', () => {
    it('should get 1 artikel', () => {

      chai.request(server)
      .get(`article/${article_id}`)
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('title')
        res.body.should.have.property('category')
        res.body.should.have.property('author')
      })
    })
  })

  describe('POST article/new', () => {
    it('should made a new article blog post', (done) => {
      console.log(user_name);
      chai.request(server)
      .post('article/new')
      .send({
        "newTitle": "buat baru test",
        "newContent": "contentnya buat baru",
        "newCategory": ["satuaja"],
        "newAuthor": user_name
      })
      .end( (err, res) => {
        console.log('============= ini dari test nya create newartikel ============');
        console.log(res);
        res.should.have.status(200)
        res.body.should.be.a('object')

        done()
      })
    })
  })

//sisanya entar

})
