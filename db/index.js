const config = require('./config')
const Sequelize = require('sequelize')
const db = new Sequelize(config);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database.' + err)
  })

module.exports = db;