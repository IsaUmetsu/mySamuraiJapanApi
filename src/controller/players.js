const { player } = require('../model');

module.exports = {
  getTeamMember: (req, res) => {
    const { team } = req.query;
    player
      .findAll({
        attributes: ['id', 'type', 'name', 'no'],
        where: { team: team },
        raw: true })
      .then(p => {
        return res.send({ error: false, result: p })
      })
  }
}