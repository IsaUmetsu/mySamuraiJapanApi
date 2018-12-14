const db = require('../../db')
const Sequelize = require('sequelize')

const createModel = model => model(db, Sequelize.DataTypes)
const player = createModel(require('./player'))

module.exports = {
  player: player
}