/**
 * @module fazenda
 * Modelo para a entidade fazenda.
 */
const fazenda = (function fazenda() {
  /**
   * Criar uma fazenda
   */
  const criar = function criar({ nome, endereco = {}, proprietario, ramo }) {
    return {
      fazenda: {
        nome: nome || 'fazenda',
        endereco,
        proprietario: proprietario || 'proprietario',
        ramo: ramo || 'ramo',
      },
    };
  };

  /**
   * Altera o nome da fazenda.
   */
  const alterarNome = function alterarNome({ dadosAtualFazenda, novoNome }) {
    return { ...dadosAtualFazenda, nome: novoNome };
  };

  return {
    criar,
    alterarNome,
  };
})();

export default fazenda;
