// Os tipos podem definir uniões, permitindo que uma variável possa ser de um conjunto de tipos especificados.

type Idade = number | string;

const idade1: Idade = 24; // Válido
const idade2: Idade = "vinte e quatro"; // Válido

// console.log(idade1)
// console.log(idade2)