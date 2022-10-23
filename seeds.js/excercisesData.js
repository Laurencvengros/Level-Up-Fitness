const {Exercises} = require('../models');

const exerciseData = [
    {
        name: 'Chest Press',
        reps:  10,
        sets: 3,
        rotine_id: 1,
        user_id: 1
    },
    {
        name: 'Squats',
        reps:  8,
        sets: 4,
        rotine_id: 2,
        user_id: 2
    },
    {
        name: 'Plank',
        reps:  3,
        sets: 5,
        rotine_id: 3,
        user_id: 3
    },
];

const seedExercises = () => Exercises.bulkCreate(ExerciseData);

module.exports = seedExercises;