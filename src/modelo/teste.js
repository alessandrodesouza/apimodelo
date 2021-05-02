import R from 'ramda';
import fazendaM from './fazenda.js';

const { fazenda, erro } = fazendaM.criar({
  nome: 'teste',
  endereco: {},
  proprietario: 'joão',
  ramo: 'textil',
});

console.log(fazenda, erro);
