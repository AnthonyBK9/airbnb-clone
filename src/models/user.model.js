const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firtName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'firt_name'
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING
    },
    birthdayDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'birthday_date'
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: DataTypes.STRING,

    },
    dni :{
        allowNull: false,
        type: DataTypes.STRING,
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_image'
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'active' 
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    ,
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    }
    ,
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
})

module.exports = Users