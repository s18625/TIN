const DrinkRepository = require('../repository/sequelize/DrinkRepository');

exports.getDrink = (req, res, next) => {
    DrinkRepository.getDrinks()
        .then(drinks => {
            res.status(200).json(drinks);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDrinkById = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.getDrinkById(drinkId)
        .then(drink => {
            if (!drink) {
                res.status(404).json({
                    message: 'Drink with id: ' + drinkId + ' not found'
                })
            } else {
                res.status(200).json(drink);
            }
        });
};

exports.createDrink = (req, res, next) => {
    DrinkRepository.createDrink(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateDrink = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.updateDrink(drinkId, req.body)
        .then(result => {
            res.status(200).json({
                message: 'Drink updated!',
                drink: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDrink = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.deleteDrink(drinkId)
        .then(result => {
            res.status(200).json({
                message: 'Removed drink',
                drink: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};