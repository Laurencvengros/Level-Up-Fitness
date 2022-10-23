const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedRoutine = require('./routineData');
const seedExercise = require('./exerciseData');




const seedAll = async() => {
    await sequelize.sync({force: true});
    console.log('\n---DATABASE SYNCED---\n');

    await seedUser();
    console.log('\n---USER DATABASE SYNCED---\n');

    await seedRoutine();
    console.log('\n---POST DATABASE SYNCED---\n');

    await seedExercise();
    console.log('\n---COMMENT DATABASE SYNCED---\n');

    process.exit(0);
};

seedAll();