const { DataTypes } = require('sequelize');
const { db } = require('../database/config.js');

const Repair = db.define('repairs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    //* Change for ENUM
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'pending',
    },
    //* We need to add the foreign key
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = { Repair };
