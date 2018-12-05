module.exports = app => {

  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  app.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
}