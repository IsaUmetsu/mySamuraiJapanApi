/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pitching_result', {
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
    order: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    pitch_count: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    inning_count: {
      type: "DOUBLE(2,1)",
      allowNull: false
    },
    strike_out_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    hit_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    homerun_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    four_ball_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    dead_ball_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    run_allows_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    earned_run_count: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'pitching_result'
  });
};
