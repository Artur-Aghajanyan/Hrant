'use strict';
module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    }, {});

    Quiz.associate = function(models){
        Quiz.hasMany(models.Question, { as : 'question', foreignKey: 'questionId' });
    }
    Quiz.sync({ alter: true }).then(() => {}).catch((err) => console.log(err));
    return Quiz;
};