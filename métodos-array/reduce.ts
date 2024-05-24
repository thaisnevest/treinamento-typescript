// O método `reduce` aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita), 
// reduzindo o array a um único valor. É útil para calcular um valor de agregação, como uma soma ou um produto.


const elementos = [1, 2, 3, 4];
const soma = elementos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma); // 10

