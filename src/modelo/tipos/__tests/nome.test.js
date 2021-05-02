const { nome } = require('../index');

describe('Testes para criação do tipo nome', () => {
  test('Quando for informado um nome válido, deve retornar o nome formatado', () => {
    expect(nome.criar('alessandro de souza')).toMatchObject({
      erro: null,
      nome: 'ALESSANDRO DE SOUZA',
    });
  });

  test('');
});
