const { nome } = require('../index');

describe('Testes para criação do tipo nome', () => {
  test('Quando for informado um nome válido, deve retornar o nome formatado', () => {
    expect(nome.criar('alessandro de souza')).toMatchObject({
      erro: null,
      nome: 'ALESSANDRO DE SOUZA',
    });

    expect(nome.criar('alessandro - de . souza _ ok')).toMatchObject({
      erro: null,
      nome: 'ALESSANDRO - DE . SOUZA _ OK',
    });
  });

  test('Quando for informato um nome nulo ou vazio, o erro deve ser retornado', () => {
    expect(nome.criar()).toMatchObject({
      erro:
        'O nome é obrigatório e deve ter até 250 caracteres. Nem todos os especiais são aceitos.',
      nome: null,
    });

    expect(nome.criar(null)).toMatchObject({
      erro:
        'O nome é obrigatório e deve ter até 250 caracteres. Nem todos os especiais são aceitos.',
      nome: null,
    });

    expect(nome.criar('')).toMatchObject({
      erro:
        'O nome é obrigatório e deve ter até 250 caracteres. Nem todos os especiais são aceitos.',
      nome: null,
    });
  });

  test('Quando for informado um nome com caracter especial não aceito, o erro deve ser retornado', () => {
    expect(nome.criar('ALESSANDRO & de *')).toMatchObject({
      erro:
        'O nome é obrigatório e deve ter até 250 caracteres. Nem todos os especiais são aceitos.',
      nome: null,
    });
  });
});
