module.exports = function (app) {
  // @route: GET /
  app.get('/', function(request, response) {
    app.app.controllers.home.getRoot(app, request, response);
  });
};
