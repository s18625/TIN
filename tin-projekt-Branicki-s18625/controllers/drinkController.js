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
        navLocation: 'drinks'
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
                navLocation: 'drinks'
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
                navLocation: 'drinks'
            });
        });
}
// exports.showDrinkDetails = (req, res, next) => {
//     res.render('pages/drink_details', {
//         navLocation: 'drinks'
//     });
// }
exports.addDrink = (req, res, next) => {
    const drinkData = {
        ...req.body
    };
    DrinkRepository.createDrink(drinkData)
        .then(result => {
            res.redirect('/drinks');
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
        });
};

exports.deleteDrink = (req, res, next) => {
    const drinkId = req.params.drinkId;
    DrinkRepository.deleteDrink(drinkId)
        .then(() => {
            res.redirect('/drinks');
        });
};

exports.showAddProportionForm = (req, res, next) => {
    let allDrinks, allIngre;
    DrinkRepository.getDrinks()
        .then(drinks => {
            allDrinks = drinks;
            return IngreadientRepository.getIngreadients();
        })
        .then(ingres => {
            allIngre = ingres;
            res.render('pages/proportion-form', {
                proportion: {},
                formMode: 'createNew',
                allDrinks: allDrinks,
                allIngres: allIngre,
                pageTitle: 'Nowa proporcja',
                btnLabel: 'Dodaj proporcje',
                formAction: '/proportion/add',
                navLocation: 'proportion'
            });
        });
}