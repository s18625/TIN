const Drink = require("../../model/sequelize/Drink");
const Proportion = require("../../model/sequelize/Proportion");
const Ingreadient = require("../../model/sequelize/Ingreadient");

exports.getDrinks = () => {
    return Drink.findAll();
};

exports.getDrinkById = (drinkId) => {
    return Drink.findByPk(drinkId, {
        include: [{
            model: Proportion,
            as: 'proportions',
            include: [{
                model: Ingreadient,
                as: 'ingreadient'
            }]
        }]
    });
};

exports.createDrink = (newDrinkData) => {
    return Drink.create({
        name: newDrinkData.name,
        prize: newDrinkData.prize,
        description: newDrinkData.description,
        serve: newDrinkData.serve
    });
};

exports.updateDrink = (drinkId, drinkData) => {
    const name = drinkData.name;
    const prize = drinkData.prize;
    const description = drinkData.description;
    const serve = drinkData.serve;
    return Drink.update(drinkData, {
        where: {
            _id: drinkId
        }
    });
};

exports.deleteDrink = (drinkId) => {
    return Drink.destroy({
        where: {
            _id: drinkId
        }
    });

};