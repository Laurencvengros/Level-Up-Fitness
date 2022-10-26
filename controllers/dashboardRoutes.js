const sequelize = require('../config/connection');
const { Exercise, User, Routine } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();


router.get('/', async (req,res)=>{
    router.get('/', async (req,res)=>{
        console.log(req.session);
        const routineData = await Routine.findOne({
          where: {
            // use the ID from the session
            id: req.session.user_id
          },
          attributes: [
            'name',
          ]
        })
        const routines = routineData.get({plain: true});
    res.render('dashboard', {routines});
    })

    
});





module.exports = router;