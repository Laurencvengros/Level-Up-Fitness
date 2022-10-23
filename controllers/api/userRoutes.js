const router = require('express').Router();
const { User } = require('../../models');

router.get ('/', async(req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude:['password']},
        });
        res.status(200).json(userData);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req,res)=>{
    try{
        const userData = await User.findOne({
            where: {id: req.params.id},
            attributes: {exclude:['password']},
            include: [
                {
                    model: Routine,
                    attributes: ['id', 'name', 'user_id', 'created_at'],
                },
                {
                    model: Excercise,
                    attributes: ['id', 'name', 'reps', 'sets', 'routine_id', 'created_at'],
                    include:{ Routine,
                    attributes: ['name']
                    },
                },
                {
                    model: Routine,
                    attributes: ['name'],
                },
            ],
        });
        if(!userData){
            res.status(404).json({message: 'user id does not exist'});
            return;
        }
        res.sendStatus(200).json(userData);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        });
    }catch(err){
        res.status(500).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {

      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;










