exports.showProportionList = (req, res, next) => {
    res.render('pages/proportion', {
        navLocation: 'proportion',
    });
}
exports.showProportionForm = (req, res, next) => {
    res.render('pages/proportion-form', {
        navLocation: 'proportion',
    });
}
exports.showProportionDetails = (req, res, next) => {
    res.render('pages/proportion-details', {
        navLocation: 'proportion',
    });
}