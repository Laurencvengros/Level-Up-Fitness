const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/', (req, res) => {
  res.render('dashboard');
});

router.get('/routine/:id', async (req, res) => {
  try {
    const routineData = await Routine.findOne({
      where: { id: req.params.id },

      include: [
        {
          model: Exercise,
          attributes: ['id', 'name', 'reps', 'sets', 'routine_id'],
          include: {
            model: User,
            attributes: ['name']
          }
        }

      ],

    });
    const routine = routineData.get({plain: true})
    console.log(routine);
    res.render('routines', {routine, logged_in: req.session.logged_in,})
  } catch (err) {
    res.status(500).json(err);

  }


});

router.get('/exercise/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.findOne({
      where: { id: req.params.id },

      include: [
        {
          model: Routine,
          attributes: [ 'name'],
        },
        {
        
            model: User,
            attributes: ['name']
        }
      ],

    });
    const exercise = exerciseData.get({plain: true})
    console.log(exercise);
    res.render('routines', {exercisee, logged_in: req.session.logged_in,})
  } catch (err) {
    res.status(500).json(err);

  }


});




module.exports = router;