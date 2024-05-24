// Interfaces podem estender outras interfaces, permitindo a reutilização de definições.

interface Endereco {
  rua: string;
  cidade: string;
}

interface Morador extends Endereco {
  nome: string;
  idade: number;
}

const morador: Morador = {
  nome: "Thaís",
  idade: 24,
  rua: "Rua A",
  cidade: "Cidade B",
};

console.log(morador.rua); // Rua A
console.log(morador.cidade); // Cidade B
