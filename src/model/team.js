/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'team'
  });
};
