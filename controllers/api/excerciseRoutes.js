const router = require('express').Router();
const { User, Routine, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

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