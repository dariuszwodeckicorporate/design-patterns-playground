const express = require('express');
const ExampleController = require('../controllers/exampleController');

const setRoutes = (app) => {
    const exampleController = new ExampleController();

    app.get('/example', exampleController.getExample.bind(exampleController));
    app.post('/example', exampleController.postExample.bind(exampleController));
};

module.exports = setRoutes;