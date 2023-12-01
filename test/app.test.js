const request = require('supertest');

const app = require('../src/app');

test('Testar se está a resolver na raíz', () => {
  return request(app).get('/')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    });
});
