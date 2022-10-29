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


router.put('/:id', async (req, res) => {
  try {
    console.log('here is the req.body', req.body);
    const [affectedRows] = await Exercise.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get ('/', async(req, res) => {
//     try{
//         const exerciseData = await Exercise.findAll({
            
//         });
//         res.status(200).json(exerciseData);
//     } catch(err){
//         res.status(500).json(err);
//     }
// });

// router.get('/:id', async (req,res)=>{
//     try{
//     const exerciseData = await Exercise.findOne({
//       where: {id: req.params.id},

//       include: [
//         {
//           model: Routine,
//           attributes: [ 'name'],
//         },
//         {
        
//             model: User,
//             attributes: ['name']
//         }
//       ],
    
//     });
//     res.status(200).json(exerciseData);
//     }catch(err){
//       res.status(500).json(err);
      
//     }
  
      
//   });

  module.exports = router;