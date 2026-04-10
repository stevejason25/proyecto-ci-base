import { saludo } from '../index';

describe('saludo', () => {
  it('debe retornar saludo con el nombre', () => {
    expect(saludo('Mundo')).toBe('Hola, Mundo!');
  });
});
