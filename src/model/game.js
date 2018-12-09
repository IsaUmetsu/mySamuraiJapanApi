/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tournament_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tournament',
        key: 'id'
      }
    },
    number: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    first_team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    bottom_team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'team',
        key: 'id'
      }
    }
  }, {
    tableName: 'game'
  });
};
