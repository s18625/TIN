const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Drink = sequelize.define('Drink', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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
    prize: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                min: 0,
                max: 1000,
                msg: "Pole musi zawierac liczbe z przedzialu od 0 do 1000"
            },
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 160],
                msg: "Pole powinno zawierać od 2 do 160 znaków"
            },
        }
    },
    serve: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 160],
                msg: "Pole powinno zawierać maksymlanie 160 znakow"
            },
        }
    }
});

module.exports = Drink;