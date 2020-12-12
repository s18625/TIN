exports.showIngreadientsList = (req, res, next) => {
    res.render('pages/ingreadient', {
        navLocation: 'ingreadient'
    });
}
exports.showIngreadientsForm = (req, res, next) => {
    res.render('pages/ingreadient_form', {
        navLocation: 'ingreadient'
    });
}
exports.showIngreadientsDetails = (req, res, next) => {
    res.render('pages/ingreadient_details', {
        navLocation: 'ingreadient'
    });
}

