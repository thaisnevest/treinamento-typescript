// O método `map` cria um novo array com os resultados de uma função aplicada a cada elemento do array original. 
// É útil quando você quer transformar os dados de um array em outro array de mesma dimensão.

const numeros2 =  [1,2,3]
const dobrados = numeros2.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]