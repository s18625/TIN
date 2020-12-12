const IngreadientRepository = require('../repository/sequelize/IngreadientRepository');

exports.getIngreadient = (req, res, next) => {
    IngreadientRepository.getIngreadients()
        .then(ingre => {
            res.status(200).json(ingre);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getIngreadientById = (req, res, next) => {
    const IngreadientId = req.params.ingreId;
    IngreadientRepository.getIngreadientById(IngreadientId)
        .then(ingre => {
            if (!ingre) {
                res.status(404).json({
                    message: 'Ingreadient with id: ' + IngreadientId + ' not found'
                })
            } else {
                res.status(200).json(ingre);
            }
        });
};

exports.createIngreadient = (req, res, next) => {
    IngreadientRepository.createIngreadient(req.body)
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

exports.updateIngreadient = (req, res, next) => {
    const ingreId = req.params.ingreId;
    IngreadientRepository.updateIngreadient(ingreId, req.body)
        .then(result => {
            res.status(200).json({
                message: 'Ingreadient updated!',
                ingreadient: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteIngreadient = (req, res, next) => {
    const ingreId = req.params.ingreId;
    IngreadientRepository.deleteIngreadient(ingreId)
        .then(result => {
            res.status(200).json({
                message: 'Removed ingreadient',
                ingreadient: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};