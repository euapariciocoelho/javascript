function minhaFuncao(vetor) {
    for (let i = 0; i < vetor.length; i++) {
      console.log(vetor[i]);
    }
  }

function adicionarValores(){
    var entrada;
    const array = []
    for(let i = 0; i<3; i++){
        entrada = prompt('Digite algo para entrar na lista');
        array[i] = entrada;
    }

    return array;
}
//const vetorInteiros = [1, 2, 3, 4, 5];
const vetorValores = adicionarValores();
console.log(vetorValores);
//minhaFuncao(vetorInteiros); // Chamando a função com um vetor de inteiros
  
//const vetorStrings = ["apple", "banana", "cherry"];
//minhaFuncao(vetorStrings); // Chamando a função com um vetor de strings
  
//const vetorMisto = [1, "two", 3, "four"];
//minhaFuncao(vetorMisto); // Chamando a função com um vetor que mistura tipos de dados
  
  