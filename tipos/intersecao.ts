// Os tipos também podem definir interseções, combinando múltiplos tipos em um único.

type Consultorio = {
  rua: string;
  cidade: string;
};

type Medico = {
  nome: string;
  telefone: number;
};

type MedicoComConsultorio = Medico & Consultorio;

const medico: MedicoComConsultorio = {
  nome: "Thaís",
  telefone: 81999999999,
  rua: "Rua X",
  cidade: "Cidade Y",
};

console.log(medico.nome); // Thaís
console.log(medico.rua); // Rua X
