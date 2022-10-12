/**
 * Name: database configaration file
 * Description: database configartion file
 * Author: Noman
 * Date: 12.10.2022
 */

// database configaration
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'inflack@123',
    DB: 'node_express_vue_mysql_crud',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
