// O método `sort` ordena os elementos do array e retorna o array. 
// Por padrão, `sort` converte os elementos em strings e compara suas sequências de valores Unicode.


const valores = [4, 2, 3, 1];
valores.sort((a, b) => a - b);
console.log(valores); // [1, 2, 3, 4]
