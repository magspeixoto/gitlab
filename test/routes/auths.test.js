const request = require('supertest');

const app = require('../../src/app');

const newMail = `${Date.now()}54@gmail.pt`;

test('Test #13 - Receber Token ao autenticar', () => {
  return app.services.user.save(
    { name: 'Margarida Auth', email: newMail, password: '12345' },
  ).then(() => request(app).post('/auth/signin')
    .send({ email: newMail, password: '12345' }))
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
});

test('Test #14 - Tentativa de autenticação errada', () => {
  return app.services.user.save(
    { name: 'Margarida Auth', email: newMail, password: '12345' },
  ).then(() => request(app).post('/auth/signin')
    .send({ email: newMail, password: '132' }))
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Autenticação inválida!');
    });
});

test('Test #15 - Tentativa de autenticação com o utilizador errado', () => {
  const nmail = `${Date.now()}23@gmail.pt`;
  return request(app).post('/auth/signin')
    .send({ email: nmail, password: '132' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Autenticação inválida! #2');
    });
});

test('Test #16 - Aceder a rotas protegidas', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(401);
    });
});

test('Test #17 - Criar utilizador', () => {
  return request(app).post('/auth/signup')
    .send({ name: 'Margarida Signup', email: newMail, password: '12345' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Margarida Signup');
      expect(res.body).toHaveProperty('email');
      expect(res.body).not.toHaveProperty('password');
    });
});
