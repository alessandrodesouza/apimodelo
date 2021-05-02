/* eslint-disable no-console */
/**
 * @module tipo 'endereco' para entidades do modelo.
 */

const { pipe } = require('ramda');

// const tipoModeloEndereco = {
//   criar: {}
// };
// module.exports = tipoModeloEndereco;

exports.criar = ({
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  estado,
  cep,
} = {}) => {
  const validarEndereco = (enderecoInformado) => ({ erros, objParcial }) => {
    const mensagem =
      'O endereço deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.';
    const tipoInvalido =
      !enderecoInformado || typeof enderecoInformado !== 'string';
    const formatado = tipoInvalido
      ? ''
      : enderecoInformado.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : /^[A-ZÀ-Ú0-9 ,-_'.]{1,250}$/g.test(formatado);

    // const formatado = `${enderecoInformado}`.toUpperCase().trim();
    // const valido = /^[A-ZÀ-Ú0-9 ,-_'.]{1,250}$/g.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, endereco: formatado },
    };
  };

  const validarNumero = (numeroInformado) => ({ erros, objParcial }) => {
    const mensagem =
      'O número deve ser um string com até 10 caracteres e nem todos os especiais são aceitos.';
    const tipoInvalido =
      !numeroInformado || typeof numeroInformado !== 'string';
    const formatado = tipoInvalido ? '' : numeroInformado.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : /^[A-ZÀ-Ú0-9 ,-_'.]{1,10}$/g.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, numero: formatado },
    };
  };

  const validarComplemento = (complementoInformado) => ({
    erros,
    objParcial,
  }) => {
    const mensagem =
      'O complemento não é obrigatório mas deve ser um string com até 100 caracteres e nem todos os especiais são aceitos.';
    const tipoInvalido = typeof complementoInformado !== 'string';
    const formatado = tipoInvalido
      ? ''
      : complementoInformado.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : /^[A-ZÀ-Ú0-9 ,-_'.]{0,100}$/g.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, complemento: formatado },
    };
  };

  const validarBairro = (bairroInformado) => ({ erros, objParcial }) => {
    const mensagem =
      'O bairro deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.';
    const tipoInvalido =
      !bairroInformado || typeof bairroInformado !== 'string';
    const formatado = tipoInvalido ? '' : bairroInformado.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : /^[A-ZÀ-Ú0-9 ,-_'.]{1,250}$/g.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, bairro: formatado },
    };
  };

  const validarCidade = (cidadeInformada) => ({ erros, objParcial }) => {
    const mensagem =
      'A cidade deve ser um string com até 250 caracteres e nem todos os especiais são aceitos.';
    const tipoInvalido =
      !cidadeInformada || typeof cidadeInformada !== 'string';
    const formatado = tipoInvalido ? '' : cidadeInformada.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : /^[A-ZÀ-Ú0-9 ,-_'.]{1,250}$/g.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, cidade: formatado },
    };
  };

  const validarEstado = (estadoInformado) => ({ erros, objParcial }) => {
    const mensagem = 'O estado informado deve ser uma UF válida.';
    const tipoInvalido =
      !estadoInformado || typeof estadoInformado !== 'string';
    const formatado = tipoInvalido ? '' : estadoInformado.toUpperCase().trim();
    const valido = tipoInvalido
      ? false
      : [
          'AC',
          'AL',
          'AP',
          'AM',
          'BA',
          'CE',
          'DF',
          'GO',
          'ES',
          'MA',
          'MT',
          'MS',
          'MG',
          'PA',
          'PB',
          'PR',
          'PE',
          'PI',
          'RJ',
          'RN',
          'RS',
          'RO',
          'RR',
          'SP',
          'SC',
          'SE',
          'TO',
        ].includes(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, estado: formatado },
    };
  };

  const validarCEP = (cepInformado) => ({ erros, objParcial }) => {
    const mensagem = 'O CEP informado não é válido.';
    const tipoInvalido = !cepInformado || typeof cepInformado !== 'string';
    const formatado = tipoInvalido ? '' : cepInformado.toUpperCase().trim();
    const valido = tipoInvalido ? false : /^\d{5}-\d{3}$/.test(formatado);

    return {
      erros: valido ? erros : erros.concat([mensagem]),
      objParcial: { ...objParcial, cep: formatado },
    };
  };

  const validar = pipe(
    validarEndereco(endereco),
    validarNumero(numero),
    validarComplemento(complemento),
    validarBairro(bairro),
    validarCidade(cidade),
    validarEstado(estado),
    validarCEP(cep)
  );

  const { objParcial: enderecoFormatado, erros } = validar({
    erros: [],
    objParcial: {},
  });

  return {
    endereco: erros.length ? null : enderecoFormatado,
    erros,
  };
};
