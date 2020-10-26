const express = require('express');
const request = require('supertest');
const ReportsRouter = require('../src/routes/ReportsRouter');
const app = express();

describe('Reports created by technicians', () => {
  it('It should return a reports list (GET /reports success)', async () => {
    const { body } = await request(app).get('/reports');
    expect(body.response.status).toBe(200);
  });

  it('It should create a report (POST /reports success)', async () => {
    const reportObj = {
      employee_name: 'Carlos E.',
      service_name: 'Test services',
      initial_date_hour: '2017-06-15 09:34:21',
      final_date_hour: '2019-06-15 09:34:21',
    };
    const { body } = await request(app).post('/reports').send(stateObj);
    expect(body.response.status).toBe(201);
  });
});
