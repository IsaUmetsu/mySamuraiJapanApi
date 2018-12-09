/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('starting_menber', {
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
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'team',
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
    order: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'starting_menber'
  });
};
