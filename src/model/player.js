/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    no: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'player'
  });
};
