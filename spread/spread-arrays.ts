// Combinar arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// Copiar arrays
const arrayOriginal = [1, 2, 3];
const copia = [...arrayOriginal];
console.log(copia); // [1, 2, 3]