const IngreadientRepository = require('../repository/sequelize/IngreadientRepository');


exports.showIngreadientsList = (req, res, next) => {
    IngreadientRepository.getIngreadients()
        .then(ingres => {
            res.render('pages/ingreadient.ejs', {
                ingres: ingres,
                navLocation: 'ingreadient'
            });
        });

}


exports.showIngreadientsForm = (req, res, next) => {
    res.render('pages/ingreadient_form', {
        navLocation: 'ingreadient'
    });
}


exports.showIngreadientsDetails = (req, res, next) => {
    const ingreId = req.params.ingreId;
    IngreadientRepository.getIngreadientById(ingreId)
        .then(ingre => {
            res.render('pages/ingreadient_form', {
                ingre: ingre,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły skladnika',
                formAction: '',
                navLocation: 'ingreadient',
                validationErrors: null,
            });
        });
}

exports.showAddIngreadientsForm = (req, res, next) => {
    res.render('pages/ingreadient_form', {
        ingre: {},
        pageTitle: 'Nowy skladnmik',
        formMode: 'createNew',
        btnLabel: 'Dodaj skladnik',
        formAction: '/ingreadient/add',
        navLocation: 'ingreadient',
        validationErrors: null,
    });
}


exports.showEditIngreadientForm = (req, res, next) => {
    const ingreId = req.params.ingreId;
    IngreadientRepository.getIngreadientById(ingreId)
        .then(ingre => {
            res.render('pages/ingreadient_form', {
                ingre: ingre,
                formMode: 'edit',
                pageTitle: 'Edycja skladnika',
                btnLabel: 'Edytuj skladnik',
                formAction: '/ingreadient/edit',
                navLocation: 'ingreadient',
                validationErrors: null,
            });
        });
};

exports.showIngreadientDetails = (req, res, next) => {
    const ingreId = req.params.ingreId;
    IngreadientRepository.getIngreadientById(ingreId)
        .then(ingre => {
            res.render('pages/ingreadient_form', {
                ingreadient: ingre,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły skladnika',
                formAction: '',
                navLocation: 'ingreadient',
                validationErrors: null,
            });
        });
}


exports.addIngreadient = (req, res, next) => {
    const ingreData = {
        ...req.body
    };
    IngreadientRepository.createIngreadient(ingreData)
        .then(result => {
            res.redirect('/ingreadient');
        })
        .catch(err => {
            res.render('pages/ingreadient_form', {
                ingre: {},
                pageTitle: 'Nowy skladnmik',
                formMode: 'createNew',
                btnLabel: 'Dodaj skladnik',
                formAction: '/ingreadient/add',
                navLocation: 'ingreadient',
                validationErrors: err.errors
            });
        });
};

exports.updateIngreadient = (req, res, next) => {
    const ingreId = req.body._id;
    const ingreData = {
        ...req.body
    };
    IngreadientRepository.updateIngreadient(ingreId, ingreData)
        .then(result => {
            res.redirect('/ingreadient');
        }).catch(err => {
            res.render('pages/ingreadient_form', {
                ingre: ingreData,
                pageTitle: 'Edycja Skladnika',
                formMode: 'createNew',
                btnLabel: 'Edytuj skladnik',
                formAction: '/ingreadient/add',
                navLocation: 'ingreadient',
                validationErrors: err.errors
            });
        });
};


exports.deleteIngreadient = (req, res, next) => {
    const ingreId = req.params.empId;
    IngreadientRepository.deleteIngreadient(ingreId)
        .then(() => {
            res.redirect('/ingreadient');
        });

};