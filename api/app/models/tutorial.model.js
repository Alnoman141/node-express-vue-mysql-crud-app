/**
 * Name: tutorial model
 * Description: tutorial for interact with database and create table
 * Author: Noman
 * Date: 12.10.2022
 */

// tuitorial object module
module.exports = (Sequelize, sequelize) => {
    const Tuitorial = sequelize.define('tutorial', {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return Tuitorial;
};
