const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Profile = sequelize.define('Profile', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
});
module.exports = Profile;