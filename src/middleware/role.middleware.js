const Role = require('../models/roles.model');

const roleAdminMiddleware = (req, res, next) => {
    Role.findOne({
        where: {
            name: 'admin',
        }
    }). then((res) => {
        const rol = req.user.rol;
        if (rol === res.id) {
            next()
        }else {
            res.status(401).json({
                status: 'Error',
                message: 'User not authorized to make this resquest',
            });
        }
    })
    .catch( () => {
        res.status(401).json({
            status: 'Error',
            message: 'User not authorized to make this resquest'
        })
    })
}

const roleHostMiddleware = (req, res, next) => {
    Role.findOne({
        where: {
            name: 'host',
        }
    }). then((res) => {
        const rol = req.user.rol;
        if (rol === res.id) {
            next()
        }else {
            res.status(401).json({
                status: 'Error',
                message: 'User not authorized to make this resquest',
            });
        }
    })
    .catch( () => {
        res.status(401).json({
            status: 'Error',
            message: 'User not authorized to make this resquest'
        })
    })
}

exports.roleAdminMiddleware = roleAdminMiddleware
exports.roleHostMiddleware = roleHostMiddleware