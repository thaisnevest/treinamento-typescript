// Combinar Objetos:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combina = { ...obj1, ...obj2 };
console.log(combina); // { a: 1, b: 2, c: 3, d: 4 }

// Atualizar Propriedades:

const pessoaAnterior = { nome: "Thaís", idade: 25 };
const pessoaAtualizada = { ...pessoaAnterior, idade: 24 };
console.log(pessoaAtualizada); // { nome: "Thaís", idade: 24 }
