const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req,res) =>{
    const userData = await User.findAll().catch((err) => { 
        res.json(err);
      });
        const users = userData.map((user) => user.get({ plain: true }));
        res.render('profile', { users });
      });

    
module.exports = router;