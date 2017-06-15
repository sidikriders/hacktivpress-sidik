const User = require('../models/users.js');
const bcrypt = require('bcrypt');
let saltRounds = 10;

function signUp(req, res, next) {
  let hash = bcrypt.hashSync(req.body.newPass, saltRounds)
  User.create({
    username: req.body.newUser,
    password: hash
  }, function(err, response) {
    if (err) {
      res.send(err)
      console.log(err);
    } else {
      res.send(req.body.newUser + ' berhasil di buat')
      console.log('ini response dari create');
      console.log(response);
    }
  })
}

function signIn(req,res,next) {
  User.findOne({
    username: req.body.username
  }, function(err, response) {
    if (err) {
      res.send(err)
      console.log(err);
    } else {
      if (!response) {
        res.send('username tidak ditemukan')
      } else {
        console.log(response);
        if (bcrypt.compareSync(req.body.password, response.password)) {
          res.send('berhasil')
        } else {
          res.send('password salah')
        }
      }
    }
  })
}

module.exports = {
  signUp,
  signIn
}
