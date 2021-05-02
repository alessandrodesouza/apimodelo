/**
 * @module tipo 'nome' para entidades do modelo.
 */

const tipoModeloNome = {
  criar: (nome) => {
    const mensagem =
      'O nome é obrigatório e deve ter até 250 caracteres. Nem todos os especiais são aceitos.';

    const tipoInvalido = !nome || typeof nome !== 'string';

    const formatado = tipoInvalido ? '' : nome.toUpperCase();

    const valido = formatado
      ? /^[A-ZÀ-Ú0-9 ,-_'.]{1,250}$/g.test(formatado)
      : false;

    return {
      nome: valido ? formatado : null,
      erro: valido ? null : mensagem,
    };
  },
};

module.exports = tipoModeloNome;
