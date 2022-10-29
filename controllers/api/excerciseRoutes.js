const router = require('express').Router();
const { User, Routine, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) =>{
  console.log(req.session)
  console.log(req.body)
    try{
        const newExercise = await Exercise.create({
        name: req.body.name,
        reps: req.body.reps,
        sets: req.body.sets,
        user_id: req.session.user_id,
        routine_id: req.body.routine_id
        
        
    });

    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.findAll({
      where: { id: req.params.id },
    });
    if (exerciseData.length === 0) {
      res
        .status(404)
        .json({ message: 'There is no exercise with that id'});
      return;
    }
    // res.status(200).json(exercisetData.reverse());
    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async(req,res)=>{
  try{
    const updateExercise = await Exercise.update(
      {
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    if(!updateExercise){
      res.status(404).json({message: 'no exercise with that id'});
      return;
    }
    res.json(updateExercise);
  }catch(err){
    res.status(500).json(err);
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


  module.exports = router;