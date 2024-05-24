// Sintaxe Básica:
// A desestruturação de objetos permite extrair valores de um objeto e atribuí-los a variáveis de forma mais simples. 

const pessoa = { nome: "Thaís", idade: 24 };

const { nome, idade } = pessoa;
console.log(nome); // Thaís
console.log(idade); // 24

const { nome: primeiroNome, idade: anos } = pessoa;
console.log(primeiroNome); // Thaís
console.log(anos); // 24
