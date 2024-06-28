/
    - src/
        index.js // server 
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    - tests/[later]
    - static/
    - temp/



    
## Project set up
- clone the project on your local
- execute `npm install` on the same path as of your root directory of the download project
- create a `.env` file in the root directory and add the following environment variables 
    - `PORT = 3000j`
- inside the `src/config` folder create a new `config.json` and then add the following piece of json

...

{
  "development": {
    "username": <Your_DB_login_id>,
    "password": <Your_DB_PWD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
...
- once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
And then execute `npx sequelize db:migrate`
...


## DB design 
  - Airplane table
  - Flight table
  - City/Airport table
   
  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - one airport can have many flights, but a flight belongs to one airport