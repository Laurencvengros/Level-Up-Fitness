const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
// const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', (req, res) => {
  Routine.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Exercise,
        attributes: ['id', 'name', 'reps', 'sets'],
        include: {
          model: User,
          attributes: ['name'],
        },
      },
      {
        model: User,
        attributes: ['name'],
      },
    ],
  })
    .then((routineData) => {
      const routines = routineData.map((routine) => routine.get({ plain: true }));
      res.render('profile', {
        routines,
        logged_in: req.session.logged_in,
        name: req.session.name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});





module.exports = router;


