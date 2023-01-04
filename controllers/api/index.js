const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes');
const exerciseRoutes =require('./excerciseRoutes');


router.use('/user', userRoutes);
router.use('/routine', routineRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;