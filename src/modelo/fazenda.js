/**
 * @module fazenda
 * Modelo para a entidade fazenda.
 */
const fazenda = (function () {
    /**
     * Criar uma fazenda
     */
    const criar = function ({ nome, endereco = {}, proprietario, ramo }) {
        return {
            fazenda: {
                nome: nome || "fazenda",
                endereco,
                proprietario: proprietario || "proprietario",
                ramo: ramo || "ramo",
            },
        };
    };

    /**
     * Altera o nome da fazenda.
     */
    const alterarNome = function ({ fazenda, novoNome }) {
        return { ...fazenda, nome: novoNome };
    };

    return {
        criar,
        alterarNome,
    };
})();

export default fazenda;
