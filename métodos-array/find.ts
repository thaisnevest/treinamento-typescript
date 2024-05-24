// O método `find` retorna o primeiro elemento do array que satisfaz a função de teste fornecida. 
// Se nenhum elemento satisfizer a função de teste, retorna `undefined`.


const teste = [1, 2, 3, 4];
const encontrado = teste.find(num => num > 2);
console.log(encontrado); // 3
