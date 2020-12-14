var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:suuji',function(req,res){
  if(req.user.username === 'hoge'){
    for(let i = 1;i <= parseInt(req.params.suuji);i++) {
      if(i % 3 === 0) {
        if(i % 15 === 0) {
          res.write('FizzBuzz     ');
        } else {
          res.write('Fizz     ');
        }
      } else if(i % 5 === 0) {
        if(i % 15 === 0) {
          res.write('FizzBuzz     ');
        } else {
          res.write('Buzz     ');
        }
      } else {
        res.write(i + '     ');
      }
    }
    res.end(); 
  }
  else{
    req.session.error = 'login failed';
    res.redirect('/login');
  }
});

module.exports = router;