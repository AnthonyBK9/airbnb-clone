const Users = require('./user.model');
const Roles = require('./roles.model');
const AccommodationImages= require('./accomodationImages.model');
const UserImages = require('./usersImages.model');
const Accomodations = require('./accomodations.model');
const Places = require('./places.model');
const Reservations = require('./reservations.model');
// const Reservations = require('./reservations.model')
// const Acomodation = require('./acomidation.model')

const initModels = () => {
    //? Users -> Posts relación de uno a muchos
    Users.hasOne(Roles)
    Roles.belongsToMany(Users)
    //Users -> User images de uno a muchos
    Users.hasOne(UserImages)
    UserImages.belongsToMany(Users)
    // User <-> Acomodation relación muchos a muchos
    Users.belongsToMany(Accomodations, { through: Reservations })
    Accomodations.belongsToMany(Users, { through: Reservations })
    //Accomodations -> accomodationImages uno a muchos
    Accomodations.hasOne(AccommodationImages)
    AccommodationImages.belongsToMany(Accomodations)
    //Accomodations -> Places uno a muchos
    Accomodations.hasOne(Places)
    Places.belongsToMany(Accomodations)
    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
}

module.exports = initModels
