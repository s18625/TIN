const ProportionRepository = require('../repository/sequelize/ProportionRepository');

exports.getProportion = (req, res, next) => {
    ProportionRepository.getProportion()
        .then(drinks => {
            res.status(200).json(drinks);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProportionById = (req, res, next) => {
    const proportionId = req.params.propId;
    ProportionRepository.getProportionById(proportionId)
        .then(prop => {
            if (!prop) {
                res.status(404).json({
                    message: 'Proportion with id: ' + proportionId + ' not found'
                })
            } else {
                res.status(200).json(prop);
            }
        });
};

exports.createProportion = (req, res, next) => {
    ProportionRepository.createProportion(req.body)
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

exports.updateProportion = (req, res, next) => {
    const proportionId = req.params.propId;
    ProportionRepository.updateProportion(proportionId, req.body)
        .then(result => {
            res.status(200).json({
                message: 'Proportion updated!',
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

exports.deleteProportion = (req, res, next) => {
    const proportionId = req.params.propId;
    ProportionRepository.deleteProportion(proportionId)
        .then(result => {
            res.status(200).json({
                message: 'Removed Proportion',
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