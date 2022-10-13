/**
 * Name: Tutorial routes
 * Description: app api route about tutorial defined here
 * Author: Noman
 * Date: 13.10.2022
 */

// dependencies
const express = require('express');
const tutorials = require('../controllers/tutorial.controller');

const router = express.Router();

module.exports = (app) => {
    // Create a new tutorial
    router.post('/', tutorials.create);

    // Retrieve all tutorials
    router.get('/', tutorials.findAll);

    // Retrieve all published tutorials
    router.get('/published', tutorials.findAllPublished);

    // Retrieve a single tutorial with id
    router.get('/:id', tutorials.findOne);

    // Update a tutorial with id
    router.put('/:id', tutorials.update);

    // Delete a tutorial with id
    router.delete('/:id', tutorials.delete);

    // delete all tutorials
    router.delete('/', tutorials.deleteAll);

    // initialize all routes into router object.
    app.use('/api/tutorials', router);
};
