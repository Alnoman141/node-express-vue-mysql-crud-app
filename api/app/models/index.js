/**
 * Name: Model index file
 * Description: this will create and return db instance
 * Author: Noman
 * Date: 12.10.2022
 */

// dependencies
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

// sequelize object
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idel: dbConfig.idel,
    },
});

// db object - module scafollding
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model')(sequelize, Sequelize);

// export the object
module.exports = db;
