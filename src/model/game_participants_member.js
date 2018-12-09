/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('game_participants_member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    team_member_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'team_member',
        key: 'id'
      }
    },
    is_starting_menber: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'game_participants_member'
  });
};
