const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Ingreadient = sequelize.define('Ingreadient', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        }
    },
    costPer100g: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                msg: "Pole musi zawierac liczbe calkowita dodatnia"
            },

        }

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Ingreadient;