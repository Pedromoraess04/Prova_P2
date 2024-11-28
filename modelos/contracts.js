const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Profile = require('./profile');

const Contract = sequelize.define('Contract', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    terms: { type: DataTypes.STRING },
    clientId: { type: DataTypes.INTEGER },
    contractorId: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
    operationDate: { type: DataTypes.DATE },
});

Contract.belongsTo(Profile, { foreignKey: 'profileId', as: 'profile' });

module.exports = Contract;
