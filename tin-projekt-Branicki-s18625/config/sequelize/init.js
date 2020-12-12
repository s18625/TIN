const sequelize = require('./sequelize');

const Drink = require('../../model/sequelize/Drink');
const Ingreadient = require('../../model/sequelize/Ingreadient');
const Proportion = require('../../model/sequelize/Proportion');

module.exports = () => {
    Drink.hasMany(Proportion, {
        as: 'proportions',
        foreignKey: {
            name: 'drink_id',
            allowNull: false
        },
        constraints: true,
        onDelete: 'CASCADE'
    });
    Proportion.belongsTo(Drink, {
        as: 'drink',
        foreignKey: {
            name: 'drink_id',
            allowNull: false
        }
    });
    Ingreadient.hasMany(Proportion, {
        as: 'proportions',
        foreignKey: {
            name: 'ingre_id',
            allowNull: false
        },
        constraints: true,
        onDelete: 'CASCADE'
    });
    Proportion.belongsTo(Ingreadient, {
        as: 'ingreadient',
        foreignKey: {
            name: 'ingre_id',
            allowNull: false
        }
    });

    let allDrinks, allIngre;
    return sequelize
        .sync({
            force: true
        })
        .then(() => {
            return Drink.findAll();
        })
        .then(drinks => {
            if (!drinks || drinks.length == 0) {
                return Drink.bulkCreate([{
                            name: 'JagerBomb',
                            prize: 14,
                            description: 'drink na bazie likieru ziołowego',
                            serve: 'przykladowe1',
                        },
                        {
                            name: 'Mojito',
                            prize: 17,
                            description: 'koktajl alkoholowy, pochodzenia kubańskiego na bazie białego rumu',
                            serve: 'przykladowe2',
                        },
                        {
                            name: 'SotB',
                            prize: 19,
                            description: 'koktajl alkoholowy przygotowywany z wódka',
                            serve: 'przykladowe3',
                        },
                    ])
                    .then(() => {
                        return Drink.findAll();
                    });
            } else {
                return drinks;
            }
        })
        .then(drinks => {
            allDrinks = drinks;
            return Ingreadient.findAll();
        })
        .then(ingre => {
            if (!ingre || ingre.length == 0) {
                return Ingreadient.bulkCreate([{
                            name: 'Jagermeister',
                            costPer100g: 10,
                            description: 'likier ziołowy'
                        },
                        {
                            name: 'RedBull',
                            costPer100g: 6,
                            description: 'napoj energetyczny'
                        }
                    ])
                    .then(() => {
                        return Ingreadient.findAll();
                    });
            } else {
                return ingre;
            }
        })
        .then(ingre => {
            allIngre = ingre;
            return Proportion.findAll();
        })
        .then(prop => {
            if (!prop || prop.length == 0) {
                return Proportion.bulkCreate([{
                        drink_id: allDrinks[0]._id,
                        ingre_id: allIngre[0]._id,
                        grammage: 250,
                        costByGrammage: 10,
                    },
                    {
                        drink_id: allDrinks[1]._id,
                        ingre_id: allIngre[0]._id,
                        grammage: 50,
                        costByGrammage: 8,
                    },
                    {
                        drink_id: allDrinks[0]._id,
                        ingre_id: allIngre[1]._id,
                        grammage: 150,
                        costByGrammage: 12,
                    }
                ]);
            } else {
                return prop;
            }

        });;
};