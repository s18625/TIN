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
        allowNull: false
    },
    costPer100g: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Ingreadient;