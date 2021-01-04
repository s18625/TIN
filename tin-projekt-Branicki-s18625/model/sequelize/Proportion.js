const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Proportion = sequelize.define('Proportion', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    grammage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                min: 0,
                max: 1000,
                msg: "Pole musi zawierac liczbe z przedzialu 1-1000"
            },

        }
    },
    costByGrammage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
                min: 0,
                max: 1000,
                msg: "Pole musi zawierac liczbe z przedzialu 1-1000"
            },
        }
    },
    drink_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ingre_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Proportion;