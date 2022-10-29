const sequelize = require('../config/connection');
const { Exercise, Routine, User } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();


router.get('/', async (req,res)=>{
  console.log(req.session);
  const routineData = await Routine.findOne({
    where: {
      // use the ID from the session
      id: req.session.user_id
    },
    attributes: [
      'name',
    ],
    
  })
  if(!routineData){
    res.render('dashboard')
  }else{
  const routine = routineData.get({plain : true});
  console.log(routine)
  res.render('dashboard', { routine });
  }
 
});


router.get('/edit/:id',  (req, res) => {
  Routine.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'name'],
    
  })
  .then((routineData) => {
      if (!routineData) {
        res.status(404).json({ message: 'No routine found with this id' });
        return;
      }

      const routine = dbroutineData.get({ plain: true });
      console.log('sending ' + req.session.name);
      res.render('edit-routine', {
        routine,
        logged_in: true,
        username: req.session.name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});



module.exports = router;