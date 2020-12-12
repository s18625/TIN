exports.showGallery = (req, res, next) => {
    res.render('pages/gallery', {
        navLocation: 'gallery'
    });
}