'use strict';
const dbConnection = require('../../config/mysql');
const ReportsTransformer = require('../transformers/ReportsTransformer');

class ReportsController {
  constructor() {
    this.connection = dbConnection();
    this.reportsTransformer = ReportsTransformer;
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
  }

  async index(req, res) {
    var SELECT = 'SELECT * FROM report';
    this.connection.query(SELECT, (err, result) => {
      if (err)
        return res.status(500).json({
          err,
        });

      return res.status(200).json({
        message: 'Reportes cargados con éxito.',
        categories: this.reportsTransformer.transform(result),
      });
    });
  }

  async create(req, res) {
    this.connection.query(
      `INSERT INTO report(employee_name, service_name, initial_date_hour, final_date_hour) VALUES('${
        req.body.employee_name || ''
      }','${req.body.service_name || ''}','${
        req.body.initial_date_hour || ''
      }','${req.body.final_date_hour || ''}')`,
      (err, result) => {
        if (err)
          return res.status(500).json({
            error: err,
          });

        this.connection.query(
          'SELECT * FROM report where id = ? ',
          result.insertId,
          (err, resultGet) => {
            if (err)
              return res.status(500).json({
                error: err,
              });

            return res.status(201).json({
              message: 'El reporte ha sido creado con éxito',
              report: this.reportsTransformer.transform(resultGet[0]),
            });
          }
        );
      }
    );
  }
}

module.exports = new ReportsController();
