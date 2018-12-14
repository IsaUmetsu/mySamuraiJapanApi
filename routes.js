const { players } = require('./src/controller');

module.exports = app => {

  app.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
  });

  app.get('/players', (req, res, next) => {
    players.getTeamMember(req, res)
  });
}