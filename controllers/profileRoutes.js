const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log(req.session);
  const userData = await User.findByPk(req.session.user_id).catch((err) => {
    res.json(err);
  });
    const user = userData.get({ plain: true });
    console.log(user)
  res.render('profile', { user });
});


module.exports = router;