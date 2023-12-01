test('Validar as principais operações do JEST', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});
test('Validar operações com objetos', () => {
  const obj = { name: 'Margarida', mail: 'magsp@gmail.pt' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Margarida');
  expect(obj.name).toBe('Margarida');
  const obj2 = { name: 'Margarida', mail: 'magsp@gmail.pt' };
  expect(obj).toEqual(obj2);
  /* expect(obj).toBe(obj2); //compara pessoa, o de cima compara propriedades */
});
