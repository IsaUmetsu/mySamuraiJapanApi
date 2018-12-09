/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team_user', {
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'team',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    tableName: 'team_user'
  });
};
