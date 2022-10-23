const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {};

Exercise.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id',
            },
        },
        routine_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'routine',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercise'
    },
);

module.exports = Exercise;

