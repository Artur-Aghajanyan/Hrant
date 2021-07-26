'use strict';
module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        type_answer: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {});

    Question.associate = function(models){
        Question.belongsTo(models.Quiz, { as : 'quiz', foreignKey: 'quizId' });
    }
    Question.sync({ alter: true }).then(() => {}).catch((err) => console.log(err));
    return Question;
};