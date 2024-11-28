const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Payment = sequelize.define('Payment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    jobId: { type: DataTypes.INTEGER },
    amount: { type: DataTypes.DOUBLE },
    operationDate: { type: DataTypes.DATE },
});
module.exports = Payment;
