const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pedro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
});

module.exports = sequelize;