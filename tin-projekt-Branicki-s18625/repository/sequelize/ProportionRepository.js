const Sequelize = require('sequelize');

const Proportion = require('../../model/sequelize/Proportion');
const Drink = require('../../model/sequelize/Drink');
const Ingreadient = require('../../model/sequelize/Ingreadient');

exports.getProportion = () => {
    return Proportion.findAll({
        include: [{
                model: Drink,
                as: 'drink'
            },
            {
                model: Ingreadient,
                as: 'ingreadient'
            }
        ]
    });
};


exports.getProportionById = (proportionId) => {
    return Proportion.findByPk(proportionId, {
        include: [{
                model: Drink,
                as: 'drink'
            },
            {
                model: Ingreadient,
                as: 'ingreadient'
            }
        ]
    });
};

exports.createProportion = (data) => {
    console.log(JSON.stringify(data));

    return Proportion.create({
        drink_id: data.drink_id,
        ingre_id: data.ingre_id,
        grammage: data.grammage,
        costByGrammage: data.costByGrammage,
    });
};

exports.updateProportion = (proportionId, data) => {
    return Proportion.update(data, {
        where: {
            _id: proportionId
        }
    });
}

exports.deleteProportion = (proportionId) => {
    return Proportion.destroy({
        where: {
            _id: proportionId
        }
    });
}

exports.deleteManyProportion = (proportionIds) => {
    return Proportion.find({
        _id: {
            [Sequelize.Op.in]: proportionIds
        }
    })
}