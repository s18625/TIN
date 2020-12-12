exports.showDrinkList = (req, res, next) => {
    res.render('pages/drinks', {
        navLocation: 'drinks'
    });
}
exports.showAddDrinkForm = (req, res, next) => {
    res.render('pages/drink_form', {
        navLocation: 'drinks'
    });
}
exports.showDrinkDetails = (req, res, next) => {
    res.render('pages/drink_details', {
        navLocation: 'drinks'
    });
}