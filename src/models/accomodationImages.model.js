const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const AccommodationImages = db.define('accommodation_images', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accommodationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'accommodation_id'
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = AccommodationImages;