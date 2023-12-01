const request = require('supertest');

/* const jwt = require('jwt-simple'); */
const mail = `${Date.now()}@ipca.pt`;
const app = require('../../src/app');

/* const secret = 'ipca!DWM@202324'; */

/* let user; */

/* beforeAll(async () => {
  const res = await app.services.user.save(
    { name: 'Margarida Peixoto', email: mail, password: '12345' },
  );
  user = { ...res[0] };
  user.token = jwt.encode(user, secret);
});
 */
test('Test #1 - Listar os utilizadores', () => {
  return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});

test('Test #2 - Inserir utilizadores', () => {
  return request(app).post('/users')
    .send({ name: 'Margarida Peixoto', email: mail, password: '54321' }) // Replace 'nmail' with a valid email
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toBe('Margarida Peixoto');
      /* expect(res.body).not.toHaveProperty('password'); */
    });
});

/* test('Test #2.1 - Guardar palavra-passe encriptada', async () => {
  const res = await request(app).post('/users')
    .set('authorization', `bearer ${user.token}`)
    .send({ name: 'Margarida Peixoto', email: `teste2.1-${Date.now()}@ipcap.pt`, password: '12345' });
  expect(res.status).toBe(201);

  const { id } = res.body;
  const userDB = await app.services.user.findOne({ id });
  expect(userDB.password).not.toBeUndefined();
  expect(userDB.password).not.toBe('12345');
}); */

/* test('Test #3 - Inserir utilizador sem nome', () => {
  return request(app).post('/users')
    .set('authorization', `bearer ${user.token}`)
    .send({ email: mail, password: '12345' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Nome obrigatório');
    });
}); */

/* test('Test #4 - Inserir utilizador sem email', async () => {
  const result = await request(app).post('/users')
    .set('authorization', `bearer ${user.token}`)
    .send({ name: 'Margarida Peixoto', password: '12345' });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Email obrigatório');
}); */

/* test('Test #5 - Inserir utilizador sem password', (done) => {
  request(app).post('/users')
    .set('authorization', `bearer ${user.token}`)
    .send({ name: 'Margarida Peixoto', email: mail })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Password obrigatória');
      done();
    });
}); */

/* test('Test #6 - Validar email duplicado', () => {
  return request(app).post('/users')
    .set('authorization', `bearer ${user.token}`)
    .send({ name: 'Margarida Peixoto', email: mail, password: '12345' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Email duplicado na BD');
    });
}); */
