const User = require('./user');
const Routine = require('./routine');
const Exercise = require('./excercises');

User.hasMany(Routine, {
    foreignKey: 'user_id'
});

Routine.hasMany(Exercise, {
    foreignKey: 'routine_id'
});

Routine.belongsTo(User, {
    foreignKey: 'user_id'
});

Exercise.belongsTo(Routine, {
    foreignKey: 'routine_id'
});

module.exports = {User, Routine, Exercise};