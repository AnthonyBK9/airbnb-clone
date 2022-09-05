const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Accommodations = db.define('accommodations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    beds: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bathrooms: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hostID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'host_id'
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    placesID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'places_id'
    },
    commision: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
});

module.exports = Accommodations;