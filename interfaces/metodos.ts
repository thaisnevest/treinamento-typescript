interface Colega {
    nome: string;
    idade: number;
    cumprimentar(): string;
  }
  
  const colega: Colega = {
    nome: "Thaís",
    idade: 24,
    cumprimentar: function () {
      return `Olá, meu nome é ${this.nome}`;
    },
  };
  
  console.log(colega.cumprimentar()); // Olá, meu nome é Thaís