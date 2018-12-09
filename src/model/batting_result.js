/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('batting_result', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_participants_member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'game_participants_member',
        key: 'id'
      }
    },
    inning: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    out_count: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    result: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rbi: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'batting_result'
  });
};
