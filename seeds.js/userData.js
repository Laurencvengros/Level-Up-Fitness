const {User} = require('../models');

const userData = [
    {
       name: 'Kelsie',
       email: 'owner@kelsieszost.design',
       password:'password1' 
    },
    {
        name: 'Lauren',
        email: 'lauren@gmail.com',
        password: 'password2'
    },
    {
        name: 'Michaela',
        email: 'michaela@gmail.com',
        password: 'password3'
    },
    {
        name: 'Ashley',
        email: 'ashley@gmail.com',
        password: 'password4'
    }
];

const seedUser = () => User.bulkCreate(userData);