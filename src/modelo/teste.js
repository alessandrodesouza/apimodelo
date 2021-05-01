import fazendaM from "./fazenda.js";
import R from "ramda";

const { fazenda, erro } = fazendaM.criar({
    nome: "teste",
    endereco: {},
    proprietario: "joão",
    ramo: "textil",
});

console.log(fazenda, erro);
