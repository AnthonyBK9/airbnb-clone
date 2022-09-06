const Users = require('../models/user.model');
const Roles = require('../models/roles.model');
const AccommodationImages= require('../models/accomodationImages.model');
const UserImages = require('../models/usersImages.model');
const Accommodations = require('../models/accomodations.model');
const Places = require('../models/places.model');
const Reservations = require('../models/reservations.model');

const generateData = async() => {
    await Roles.bulkCreate([
        {
            name: 'guesd', id:'ba776a46-a730-4214-898c-da31570f00fa'
        },
        {
            name: 'host', id:'802c24ce-de98-4975-8ddc-36ef6ece7eed'
        },
        {
            name: 'admin', id:'349c6554-7db4-4a2b-9d0e-1572261fe2e6'
        }
    ]);
}

module.exports = generateData;