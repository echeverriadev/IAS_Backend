const ReportsRouter = require('./ReportsRouter');

exports.load = (app) => {
  app.use('/reports', ReportsRouter);

  return app;
};
