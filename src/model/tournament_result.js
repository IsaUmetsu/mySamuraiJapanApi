/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tournament_result', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tournament_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tournament',
        key: 'id'
      }
    },
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'game',
        key: 'id'
      }
    }
  }, {
    tableName: 'tournament_result'
  });
};
