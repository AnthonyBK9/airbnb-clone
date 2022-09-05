const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const UsersImages = db.define('users_images', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usersID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
});

module.exports = UsersImages;