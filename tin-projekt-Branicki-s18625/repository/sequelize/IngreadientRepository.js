const Drink = require("../../model/sequelize/Drink");
const Proportion = require("../../model/sequelize/Proportion");
const Ingreadient = require("../../model/sequelize/Ingreadient");

exports.getIngreadients = () => {
    return Ingreadient.findAll();
};

exports.getIngreadientById = (ingreId) => {
    return Ingreadient.findByPk(ingreId, {
        include: [{
            model: Proportion,
            as: 'proportions',
            include: [{
                model: Drink,
                as: 'drink'
            }]
        }]
    });
};

exports.createIngreadient = (newIngreData) => {
    return Ingreadient.create({
        name: newIngreData.name,
        costPer100g: newIngreData.costPer100g,
        description: newIngreData.description
    });
};

exports.updateIngreadient = (ingreId, ingreData) => {
    const name = ingreData.name;
    const costPer100g = ingreData.costPer100g;
    const description = ingreData.description;
    return Ingreadient.update(ingreData, {
        where: {
            _id: ingreId
        }
    });
};

exports.deleteIngreadient = (ingreId) => {
    return Ingreadient.destroy({
        where: {
            _id: ingreId
        }
    });

};