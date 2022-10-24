const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login',{layout : 'login'});
  });

router.get('/signup', (req, res) => {
    res.render('signup',{layout : 'signup'});
  });

  router.get('/', (req, res) => {
    res.render('main',{layout : 'main'});
  });

  router.get('/profile', (req, res) => {
    res.render('profile',{layout : 'profile'});
  });

  module.exports = router;