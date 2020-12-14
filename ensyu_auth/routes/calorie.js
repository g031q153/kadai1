var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const connection = require('../db');
const authCheck = require('../authCheck');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/material',authCheck,function(req,res,next){
  res.render('calorie/material',{error: ''});
});

router.get('/cuisine',authCheck, function(req,res,next){
  res.render('calorie/cuisine',{error: ''});
});

router.get('/aerobic',authCheck, function(req,res,next){
  res.render('calorie/aerobic',{error: ''});
});

router.get('/muscle',authCheck, function(req,res,next){
  res.render('calorie/muscle',{error: ''});
});

router.get('/date',authCheck, function(req,res,next){
  res.render('calorie/date',{error: ''});
});

router.post('/material',authCheck,async function(req,res,next){
  const newMeal = {

    
  };
  console.log(newUser);
  (await connection)
    .getRepository('users')
    .save(newUser)
    .then((savedUser) => {
      console.log(savedUser);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('users/create',{error});
    });
})

router.post('/cuisine',authCheck,async function(req,res,next){
  const newMeal = {

    
  };
  console.log(newUser);
  (await connection)
    .getRepository('users')
    .save(newUser)
    .then((savedUser) => {
      console.log(savedUser);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('users/create',{error});
    });
})

router.post('/aerobic',authCheck,async function(req,res,next){
  const newMeal = {

    
  };
  console.log(newUser);
  (await connection)
    .getRepository('users')
    .save(newUser)
    .then((savedUser) => {
      console.log(savedUser);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('users/create',{error});
    });
})

router.post('/muscle',authCheck,async function(req,res,next){
  const newUser = {
    username: req.body.username,
    password: crypto.createHash('sha256').update(req.body.password).digest('hex'),
    mailaddress: req.body.mailaddress,
  };
  console.log(newUser);
  (await connection)
    .getRepository('users')
    .update
    (
      {username: req.body.username},
      {mailaddress: req.body.mailaddress},
      {password: crypto.createHash('sha256').update(req.body.password).digest('hex')}
    )
    .then((savedUser) => {
      req.user.username = req.body.username;
      console.log(savedUser);
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
      res.render('users/update',{error});
    });
})

router.post('/date',authCheck,async function(req,res,next){
  (await connection)
  .getRepository('users')
  .delete({username: req.user.username})
    .then((savedUser) => {
      req.user.username = null;
      console.log(savedUser);
      res.redirect('/login');
    })
    .catch(error => {
      console.log(error)
      res.render('users/delete',{error});
    })
    req.user.username <= null;
})

module.exports = router;
