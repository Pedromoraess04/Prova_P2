const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Job = sequelize.define('Job', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    contractId: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    operationDate: { type: DataTypes.DATE },
    paymentValue: { type: DataTypes.DOUBLE },
    paid: { type: DataTypes.BOOLEAN, defaultValue: false },
});
module.exports = Job;