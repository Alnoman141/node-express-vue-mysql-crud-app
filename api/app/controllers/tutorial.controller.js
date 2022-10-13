/**
 * Name: Tutorial controller
 * Description: all tutorial api function will writen here
 * Author: Noman
 * Date: 12.10.2022
 */

// dependences
const db = require('../models');

const Tutorial = db.tutorials;
const { Op } = db.Sequelize.Op;

// create and save new tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };

    // Save Tutorial in the database
    Tutorial.create(tutorial)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Tutorial.',
            });
        });
};

// Retrieve all tutorials from the database
exports.findAll = (req, res) => {
    const { title } = req.query;
    const condition = title ? { title: { [Op.like]: `%${title}` } } : null;

    Tutorial.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retrieving tutorials',
            });
        });
};

// Find a single tutorial with an id
exports.findOne = (req, res) => {
    const { id } = req.params;

    Tutorial.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send({
                    message: `Can not find tutorial with id = ${id}`,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Error retrieving with id = ${id}`,
            });
        });
};

// Update a tutorial by the id in the request
exports.update = (req, res) => {
    const { id } = req.params;

    Tutorial.update(req.body, {
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Tutorial was updated successfully',
                });
            } else {
                res.send({
                    message: `Can not update tutorial with id = ${id}. Maybe Tutorial was not found or req.body is empty!`,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Error updating tutorial with id = ${id}`,
            });
        });
};

// Delete a tutorial with the specified id in the request
exports.delete = (req, res) => {
    const { id } = req.params;

    Tutorial.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) {
                res.send({
                    message: 'Tutorial was deleted successfully!',
                });
            } else {
                res.send({
                    message: `Can not delete tutorial with id = ${id}. Maybe Tutorial was not found!`,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || `Could not delete tutorial with id = ${id}`,
            });
        });
};

// Delete all tutorials from the database
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({
                message: `${nums} Tutorial were deleted successfully!`,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while removing all tutorials.',
            });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Some error occurred while retriving tutorials.',
            });
        });
};
