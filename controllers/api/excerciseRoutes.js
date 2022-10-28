const router = require('express').Router();
const { User, Routine, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) =>{
  console.log(req.session)
  console.log(req.body)
    try{
        const newRoutine = await Routine.create({
        name: req.body.name,
        Reps: req.body.reps,
        Sets: req.body.sets,
        user_id: req.session.user_id,
        routine_id: req.body.routine_id
        // user_id: req.params.id,
        
    });

    res.status(200).json(newRoutine);
  } catch (err) {
    res.status(400).json(err);
  }
});







router.get ('/', async(req, res) => {
    try{
        const exerciseData = await Exercise.findAll({
            
        });
        res.status(200).json(exerciseData);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res)=>{
    try{
    const exerciseData = await Exercise.findOne({
      where: {id: req.params.id},

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
    res.status(200).json(exerciseData);
    }catch(err){
      res.status(500).json(err);
      
    }
  
      
  });

  module.exports = router;