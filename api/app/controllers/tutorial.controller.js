/**
 * Name: Tutorial controller
 * Description: all tutorial api function will writen here
 * Author: Noman
 * Date: 12.10.2022
 */

// dependences
const db = require('../models');

const Tuitorial = db.tutorials;
const { Op } = db.Sequelize;

// create and save new tutorial
exports.create = (req, res) => {};

// Retrieve all tutorials from the database
exports.findAll = (req, res) => {};

// Find a single tutorial with an id
exports.findOne = (req, res) => {};

// Update a tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all tutorials from the database
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
