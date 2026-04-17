const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('should return server status as UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
    expect(res.body).toHaveProperty('message', 'Server is healthy');
  });
});
