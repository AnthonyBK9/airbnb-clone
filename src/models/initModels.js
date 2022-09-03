const Users = require('./user.model')
const Roles = require('./roles.model')
// const Reservations = require('./reservations.model')
// const Acomodation = require('./acomidation.model')

const initModels = () => {
    //? Users -> Posts relación de uno a muchos
    Users.hasOne(Roles)
    Roles.belongsToMany(Users)
    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
    // User <-> Acomodation relación muchos a muchos
    // Users.belongsToMany(Acomodation, { through: Reservations })
    // Acomodation.belongsToMany(Users, { through: Reservations })
}

module.exports = initModels
