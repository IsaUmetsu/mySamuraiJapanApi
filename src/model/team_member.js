/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team_member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'player',
        key: 'id'
      }
    }
  }, {
    tableName: 'team_member'
  });
};
