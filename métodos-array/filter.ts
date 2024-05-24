// O método `filter` cria um novo array com todos os elementos que passam em um teste (função de callback). 
// É útil para filtrar elementos com base em uma condição específica.

const lista = [1, 2, 3, 4];
const pares = lista.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
