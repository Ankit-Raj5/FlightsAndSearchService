const e = require('express');
const {Airplane} = require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something went wrong at repository layer");
            throw(error);
        }
    }
}

module.exports = AirplaneRepository;