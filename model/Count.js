const Sequelize = require('sequelize');
const sequelize = new Sequelize('serviceapp', 'root', 'root', {
      host: process.env.DATABASE_HOST ,
      dialect: 'mysql',
      pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
      },
      port: 3306,
      operatorsAliases: false
});


/**
 * Model definition
 */
const Count = sequelize.define('count', {
      "name": Sequelize.STRING,
      "value": Sequelize.INTEGER,
});

/**
 *  Check if default value exists in table else insert one.
 */
sequelize.sync()
      .then(() => {

            Count.count({ where : { name: 'default' } }).then(count => {

                  if(count === 0){ 
                        Count.create({
                              id: 1,
                              name: 'default',
                              value: 0
                        })
                  }

            })

      }); 

module.exports = Count;