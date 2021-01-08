const DrinkRepository = require('../repository/sequelize/DrinkRepository');
const IngreadientRepository = require('../repository/sequelize//IngreadientRepository');



exports.showDrinkList = (req, res, next) => {
    DrinkRepository.getDrinks()
        .then(drinks => {
            res.render('pages/drinks', {
                drinks: drinks,
                navLocation: 'drinks'
            });
        });
}
exports.showAddDrinkForm = (req, res, next) => {
    res.render('pages/drink_form', {
        drink: {},
        pageTitle: 'Nowy Drink',
        formMode: 'createNew',
        btnLabel: 'Dodaj drinka',
        formAction: '/drinks/add',
        navLocation: 'drinks',
        validationErrors: null,
    });
    // res.render('pages/drink_form', {
    //     navLocation: 'drinks'
    // });
}

exports.showEditDrinkForm = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.getDrinkById(drinkId)
        .then(drink => {
            res.render('pages/drink_form', {
                drink: drink,
                formMode: 'edit',
                pageTitle: 'Edycja drinka',
                btnLabel: 'Edytuj drinka',
                formAction: '/drinks/edit',
                navLocation: 'drinks',
                validationErrors: null,
            });
        });
};

exports.showDrinkDetails = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.getDrinkById(drinkId)
        .then(drink => {
            res.render('pages/drink_form', {
                drink: drink,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły drinka',
                formAction: '',
                navLocation: 'drinks',
                validationErrors: null,
            });
        });
}
// exports.showDrinkDetails = (req, res, next) => {
//     res.render('pages/drink_details', {
//         navLocation: 'drinks'
//     });
// }
exports.addDrink = (req, res, next) => {
    const newDrinkData = {
        ...req.body
    };
    DrinkRepository.createDrink(newDrinkData)
        .then(result => {
            res.redirect('/drinks');
        })
        .catch(err => {
            res.render('pages/drink_form', {
                drink: newDrinkData,
                pageTitle: 'Nowy Drink',
                formMode: 'createNew',
                btnLabel: 'Dodaj drinka',
                formAction: '/drinks/add',
                navLocation: 'drinks',
                validationErrors: err.errors
            });
        });
};

exports.updateDrink = (req, res, next) => {
    const drinkId = req.body._id;
    const drinkData = {
        ...req.body
    };
    DrinkRepository.updateDrink(drinkId, drinkData)
        .then(result => {
            res.redirect('/drinks');
        })
        .catch(err => {
            res.render('pages/drink_form', {
                drink: drinkData,
                pageTitle: 'Edycja Drinka',
                formMode: 'createNew',
                btnLabel: 'Edytuj drinka',
                formAction: '/drinks/add',
                navLocation: 'drinks',
                validationErrors: err.errors
            });
        });
};

exports.deleteDrink = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.deleteDrink(drinkId)
        .then(() => {
            res.redirect('/drinks');
        });
};