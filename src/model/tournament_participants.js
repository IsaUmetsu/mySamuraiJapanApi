/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tournament_participants', {
    tournament_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tournament',
        key: 'id'
      }
    },
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'team',
        key: 'id'
      }
    }
  }, {
    tableName: 'tournament_participants'
  });
};
