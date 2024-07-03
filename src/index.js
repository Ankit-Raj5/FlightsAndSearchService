const express = require('express');
const bodyParser = require('body-parser');
const Sequelize= require('sequelize')
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const db = require('./models/index');
//const {Airplane} = require('./models/index');

const setupAndStartServer = async ()=>{
    //create the express object

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`server started at ${PORT}`);
        // console.log(process.env);
        //console.log(Sequelize.DataTypes.NOW);
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter:true});//don't replace `alter` by `force` ,it can delete all data of that class
        // }


        // creating new airplane
        // await Airplane.create({
        //     modelNumber:'Bombardier crj'
        // });
    });
}

setupAndStartServer();