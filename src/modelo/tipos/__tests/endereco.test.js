/* eslint-disable no-console */
const { endereco } = require('../index');

describe('Testes para criação do tipo endereço', () => {
  const enderecoInformado = {
    endereco: ' rua Pedro Bento e Zé da Estrada',
    numero: ' 100 a',
    complemento: ' ',
    bairro: 'centro ',
    cidade: 'pindaíba do Açaú ',
    estado: ' pi ',
    cep: '  09290-098  ',
    x: 'propriedade ignorada',
  };

  const enderecoValidado = {
    endereco: 'RUA PEDRO BENTO E ZÉ DA ESTRADA',
    numero: '100 A',
    complemento: '',
    bairro: 'CENTRO',
    cidade: 'PINDAÍBA DO AÇAÚ',
    estado: 'PI',
    cep: '09290-098',
  };

  const erros = [
    'O endereço deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.',
    'O número deve ser um string com até 10 caracteres e nem todos os especiais são aceitos.',
    'O complemento não é obrigatório mas deve ser um string com até 100 caracteres e nem todos os especiais são aceitos.',
    'O bairro deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.',
    'A cidade deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.',
    'O estado informado deve ser uma UF válida.',
    'O CEP informado não é válido.',
  ];

  test('Quando um endereço válido for informado, o objeto com o endereço formatado deve ser retornado', () => {
    expect(endereco.criar(enderecoInformado)).toEqual({
      erros: [],
      endereco: enderecoValidado,
    });
  });

  test('Quando um objeto endereço inválido for informado, os erros correspondentes devem ser retornados', () => {
    expect(endereco.criar()).toEqual({
      erros,
      endereco: null,
    });

    expect(endereco.criar({})).toEqual({
      erros,
      endereco: null,
    });

    expect(endereco.criar(1)).toEqual({
      erros,
      endereco: null,
    });

    expect(endereco.criar([])).toEqual({
      erros,
      endereco: null,
    });

    expect(endereco.criar('xxx')).toEqual({
      erros,
      endereco: null,
    });

    // expect(endereco.criar(null)).toEqual({
    //   erros,
    //   endereco: null,
    // });
  });

  test('Quando um endereço com o campo endereço estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(
      endereco.criar({ ...enderecoInformado, endereco: '%%DDFKF' })
    ).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, endereco: '' })).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, endereco: 111 })).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, endereco: [] })).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, endereco: {} })).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, endereco: null })).toEqual({
      erros: [erros[0]],
      endereco: null,
    });

    expect(
      endereco.criar({ ...enderecoInformado, endereco: undefined })
    ).toEqual({
      erros: [erros[0]],
      endereco: null,
    });
  });

  test('Quando um endereço com o campo número estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(
      endereco.criar({ ...enderecoInformado, numero: '46475jjjfhyta' })
    ).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: '*99@' })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: '' })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: 1 })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: {} })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: [] })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: null })).toEqual({
      erros: [erros[1]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, numero: undefined })).toEqual(
      {
        erros: [erros[1]],
        endereco: null,
      }
    );
  });

  test('Quando um endereço com o campo complemento estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(endereco.criar({ ...enderecoInformado, complemento: 1 })).toEqual({
      erros: [erros[2]],
      endereco: null,
    });

    expect(
      endereco.criar({ ...enderecoInformado, complemento: '$fff%' })
    ).toEqual({
      erros: [erros[2]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, complemento: {} })).toEqual({
      erros: [erros[2]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, complemento: [] })).toEqual({
      erros: [erros[2]],
      endereco: null,
    });

    expect(
      endereco.criar({ ...enderecoInformado, complemento: undefined })
    ).toEqual({
      erros: [erros[2]],
      endereco: null,
    });
  });

  test('Quando um endereço com o campo bairro estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(endereco.criar({ ...enderecoInformado, bairro: '*99@' })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: '' })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: 1 })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: {} })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: [] })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: null })).toEqual({
      erros: [erros[3]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, bairro: undefined })).toEqual(
      {
        erros: [erros[3]],
        endereco: null,
      }
    );
  });

  test('Quando um endereço com o campo cidade estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(endereco.criar({ ...enderecoInformado, cidade: '*99@' })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: '' })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: 1 })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: {} })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: [] })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: null })).toEqual({
      erros: [erros[4]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cidade: undefined })).toEqual(
      {
        erros: [erros[4]],
        endereco: null,
      }
    );
  });

  test('Quando um endereço com o campo estado estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(endereco.criar({ ...enderecoInformado, estado: 'XX' })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: '*99@' })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: '' })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: 1 })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: {} })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: [] })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: null })).toEqual({
      erros: [erros[5]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, estado: undefined })).toEqual(
      {
        erros: [erros[5]],
        endereco: null,
      }
    );
  });

  test('Quando um endereço com o campo cep estivar inválido, o erro informativo correto deve ser retornado', () => {
    expect(endereco.criar({ ...enderecoInformado, cep: '13844908' })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: '*99@' })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: '' })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: 1 })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: {} })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: [] })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: null })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });

    expect(endereco.criar({ ...enderecoInformado, cep: undefined })).toEqual({
      erros: [erros[6]],
      endereco: null,
    });
  });
});
