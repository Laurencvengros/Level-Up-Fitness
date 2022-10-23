const {Routine} = require('../models');

const routineData = [
    {
       name: 'Upper Body',
       user_id: 1, 
    },
    {
        name: 'Lower Body',
        user_id: 2,
    },
    {
        name: 'Full Body',
        user_id: 3,
    },
];

const seedRoutine = () => Routine.bulkCreate(RoutineData);

module.exports = seedRoutine;