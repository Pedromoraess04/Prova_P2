const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Deposit = sequelize.define('Deposit', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    profileId: { type: DataTypes.INTEGER },
    amount: { type: DataTypes.DOUBLE },
    operationDate: { type: DataTypes.DATE },
});
module.exports = Deposit;
