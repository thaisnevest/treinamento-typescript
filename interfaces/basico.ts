// Definindo uma Interface

interface Pessoa {
  nome: string;
  idade: number;
  sobrenome?: string; 
}

const aluna: Pessoa = {
  nome: "Thaís",
  idade: 24,
  sobrenome: "Neves"
};

console.log(aluna.nome); // Thaís
console.log(aluna.idade); // 24
console.log(aluna.sobrenome); // undefined
