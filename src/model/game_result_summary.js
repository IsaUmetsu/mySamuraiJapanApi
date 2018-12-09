/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_result_summary', {
    id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    inning: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    hit_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    error_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'game_result_summary'
  });
};
