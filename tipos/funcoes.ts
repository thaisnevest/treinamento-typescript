// Você pode usar tipos para definir assinaturas de funções.

type Cumprimentar = (nome: string) => string;

const cumprimentar: Cumprimentar = (nome) => {
  return `Olá, ${nome}`;
};

console.log(cumprimentar("Thaís")); // Olá, Thaís

