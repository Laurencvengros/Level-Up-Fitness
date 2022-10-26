const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/signup', (req, res) => {
    res.render('signup');
  });

  router.get('/', (req, res) => {
    res.render('homePage');
  });

  router.get('/dashboard', (req,res) =>{
    res.render('addRoutine');
  })

  // router.get('/profile', (req, res) => {
  //   res.render('profile');
  // });

  module.exports = router;