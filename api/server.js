/**
 * Name: Nodejs, expressjs, vuejs & mysql simple crud app
 * Description: Nodejs, expressjs, vuejs & mysql simple crud app
 * Author: Noman
 * Date: 12.10.2022
 */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models');

// app object - module scafollding
const app = express();

const corsOptions = {
    origin: 'http://localhost:8081',
};

// database configaration
db.sequelize
    .sync()
    .then(() => {
        console.log('Drop and re-sync db.');
    })
    .catch((error) => {
        console.log(`Failed to sync db: ${error.message}`);
    });

// assign cors
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// register router
require('./app/routes/turorial.routes')(app);

// a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome tho the app' });
});

// set port and listen server for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
