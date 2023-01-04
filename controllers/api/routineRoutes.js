const router = require('express').Router();
const { User, Routine, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) =>{
  console.log(req.session)
  console.log(req.body)
    try{
        const newRoutine = await Routine.create({
        name: req.body.name,
        user_id: req.session.user_id,
        // user_id: req.params.id,
      
        
    });
    

    res.status(200).json(newRoutine);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get ('/', async(req, res) => {
    try{
        const routineData = await Routine.findAll({
          
            
        });
        res.status(200).json(routineData);
    } catch(err){
        res.status(500).json(err);
    }
});


router.get('/:id', async (req,res)=>{
    try{
    const routineData = await Routine.findOne({
      where: {id: req.params.id},

      include: [
        {
          model: User,
          attributes: [ 'name'],
        },
        {
          model: Exercise,
          attributes: ['id', 'name', 'reps', 'sets', 'routine_id'],
          include: {
            model: User,
            attributes: ['name']
        }
          
        },
      ],
    
    });
    res.status(200).json(routineData);
    }catch(err){
      res.status(500).json(err);
      
    }
  
      
  });

  router.delete('/:id', async (req, res) => {
    try {
      const routineData = await Routine.destroy({
        where: {
          id: req.params.id,
          
        },
      });
      if (!routineData) {
        res.status(404).json({message: "nothing to delete"});
        return;
      }
  
      res.status(200).json(routineData);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;