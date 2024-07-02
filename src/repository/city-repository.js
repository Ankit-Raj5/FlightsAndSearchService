const { Op, where } = require('sequelize');
const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){//name:"new delhi"
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id : cityId
                } 
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
 
    async updateCity(cityId,data){
        try {

            //The below commented approach also works bu will not return updated object.
            //if we are using pg Sequel then `returning: true` is used,else not 
            // const city = await City.update(data,{
            //     where : {
            //         id : cityId,
            //     }
            // });

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();

            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter){//filter can be empty
        try {
            if(filter.name){
                const cities = City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;   
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;