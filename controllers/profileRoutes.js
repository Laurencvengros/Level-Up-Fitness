const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();

// router.get('/', async (req, res) => {
//   console.log(req.session);
//   const userData = await User.findByPk(req.session.user_id)
//   .catch((err) => {
//     res.json(err);
//     console.log(userData)
//   });
//     const user = userData.get({ plain: true });
//     console.log(user)
//     res.render('profile', { user });
// });

// router.get('/:id', async(req,res) =>{
//   const routineData = await Routine.findByPk(req.session.user_id).catch((err)=>{
//     res.json(err);
//   });

//   const routine = routineData.get({plain: true});
//   console.log(routine)
//   res.render('profile', {routine});
// });


router.get('/', async (req,res)=>{
  console.log(req.session);
  const userData = await User.findOne({
    where: {
      // use the ID from the session
      id: req.session.user_id
    },
    attributes: [
      'name',
    ],
    include: [
   
      {
        model: Routine,
        attributes: ['name'],
        
      },
      {
        model: Exercise,
        attributes: ['name', 'reps', 'sets', 'created_at']
      }
    ]
  })
  
  const users = userData.get({plain : true});
  console.log(users)
  res.render('profile', { users });
 
});

  



module.exports = router;