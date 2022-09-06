const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Reservations = db.define('reservations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    arrival: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    departure: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    accommodationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'accommodation_id'
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
    ,
    babies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    pets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    scores: {
        allowNull: false,
        type: DataTypes.DECIMAL,
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_finished'
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_canceled'
    }
});

module.exports = Reservations;