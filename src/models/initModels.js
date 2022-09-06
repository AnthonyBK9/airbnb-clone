const Users = require('./user.model');
const Roles = require('./roles.model');
const AccommodationImages= require('./accomodationImages.model');
const UserImages = require('./usersImages.model');
const Accommodations = require('./accomodations.model');
const Places = require('./places.model');
const Reservations = require('./reservations.model');

const initModels = () => {
    //? Users -> Posts relación de uno a muchos
    Roles.hasMany(Users, {foreignKey: { name:'role_id', allowNull: false }});
    Users.belongsTo(Roles);
    //Users -> User images de uno a muchos
    //? Users -> Users_images
    UserImages.belongsTo(Users);
    Users.hasMany(UserImages);

    //? Users <-> Accomodations
    Users.belongsToMany(Accommodations, { through: Reservations });
    Accommodations.belongsToMany(Users, { through: Reservations });

    //? Accomodations -> Acommodation_images
    AccommodationImages.belongsTo(Accommodations);
    Accommodations.hasMany(AccommodationImages);

    //? 
    Accommodations.belongsTo(Places);
    Places.hasMany(Accommodations);

    //? User -> Acommodations (Host)
    Users.hasMany(Accommodations)
    Accommodations.belongsTo(Users)
}

module.exports = initModels
