const IngreadientRepository = require('../repository/sequelize/IngreadientRepository');
const DrinkRepository = require('../repository/sequelize/DrinkRepository');
const ProportionRepository = require('../repository/sequelize/ProportionRepository');


exports.showProportionList = (req, res, next) => {
    let allDrinks, allIngre;
    DrinkRepository.getDrinks()
        .then(drinks => {
            allDrinks = drinks;
            return IngreadientRepository.getIngreadients();
        })
        .then(ingres => {
            allIngre = ingres;
            return ProportionRepository.getProportion();

        }).then(props => {
            res.render('pages/proportion', {
                proportion: {},
                props: props,
                allDrinks: allDrinks,
                allIngre: allIngre,
                navLocation: 'proportion'
            });
        });
}
exports.showProportionForm = (req, res, next) => {
    res.render('pages/proportion-form', {
        navLocation: 'proportion',
    });
}


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
                pageTitle: 'Nowa proporcja',
                formMode: 'createNew',
                allDrinks: allDrinks,
                allIngre: allIngre,
                btnLabel: 'Dodaj proporcje',
                formAction: '/proportion/add',
                navLocation: 'proportion'
            });
        });
}
// exports.showEditProportionForm = (req, res, next) => {
//     let allDrinks, allIngre;
//     DrinkRepository.getDrinks()
//         .then(drinks => {
//             allDrinks = drinks;
//             return IngreadientRepository.getIngreadients();
//         })
//         .then(ingres => {
//             allIngre = ingres;
//             res.render('pages/proportion-form', {
//                 proportion: {},
//                 formMode: 'edit',
//                 allDrinks: allDrinks,
//                 allIngre: allIngre,
//                 pageTitle: 'Edycja proporcji',
//                 btnLabel: 'Edytuj proporcje',
//                 formAction: '/proportion/edit',
//                 navLocation: 'proportion'
//             });
//         });
// }
exports.showEditProportionForm = (req, res, next) => {
    let allDrinks, allIngre;
    const propId = req.params.propId;
    DrinkRepository.getDrinks()
        .then(drinks => {
            allDrinks = drinks;
            return IngreadientRepository.getIngreadients()
        })
        .then(ingres => {
            allIngre = ingres;
            return ProportionRepository.getProportionById(propId)
        })
        .then(prop => {
            res.render('pages/proportion-form', {
                proportion: prop,
                formMode: 'edit',
                allDrinks: allDrinks,
                allIngre: allIngre,
                pageTitle: 'Edycja proporcji',
                btnLabel: 'Edytuj proporcje',
                formAction: '/proportion/edit',
                navLocation: 'proportion'
            });

        });

}

exports.showProportionDetails = (req, res, next) => {
    let allDrinks, allIngre;
    const propId = req.params.propId;
    DrinkRepository.getDrinks()
        .then(drinks => {
            allDrinks = drinks;
            return IngreadientRepository.getIngreadients();
        })
        .then(ingres => {
            allIngre = ingres;
            return ProportionRepository.getProportionById(propId)
        })
        .then(prop => {
            res.render('pages/proportion-form', {
                proportion: prop,
                formMode: 'showDetails',
                allDrinks: allDrinks,
                allIngre: allIngre,
                pageTitle: 'Szczegoly proporcji',
                btnLabel: 'Edytuj proporcje',
                formAction: '/proportion/edit',
                navLocation: 'proportion'
            });

        });

}

exports.addProportion = (req, res, next) => {
    const propData = {
        ...req.body
    };
    ProportionRepository.createProportion(propData)
        .then(result => {
            res.redirect('/proportion');
        });
};

exports.updateProportion = (req, res, next) => {
    const propId = req.body._id;
    const propData = {
        ...req.body
    };
    ProportionRepository.updateProportion(propId, propData)
        .then(result => {
            res.redirect('/proportion');
        });

};

exports.deleteProportion = (req, res, next) => {
    const propId = req.params.propId;
    ProportionRepository.deleteProportion(propId)
        .then(() => {
            res.redirect('/proportion');
        });
};