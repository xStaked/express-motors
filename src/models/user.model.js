const { DataTypes } = require('sequelize');
const { db } = require('../database/config.js');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    //* Need to change for ENUM
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'employee',
    },
    //* Need to change for ENUM
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'available',
    },
});

module.exports = { User };
