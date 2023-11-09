class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }
  
  // Criando uma instância da classe Pessoa
  const pessoa1 = new Pessoa('Alice', 25);
  const pessoa2 = new Pessoa('Aparicio', 26);
  // Chamando o método da instância
  pessoa2.apresentar(); // Saída: Olá, meu nome é Alice e eu tenho 25 anos.