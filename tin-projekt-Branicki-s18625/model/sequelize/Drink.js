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
        allowNull: false
    },
    prize: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    serve: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Drink;