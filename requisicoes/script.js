const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const btnReset = document.getElementById('btn-reset');
const content = document.getElementById('content');
const conteinerResult = document.getElementById('result-style');
const image = document.getElementById('img');

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`) 
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  });

  return result;
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode'];
const newKeys = {
  name: 'Nome',
  status: 'Status',
  species: 'Espécie',
  gender: 'Gênero',
  origin: 'Planeta de origem',
  episode: 'Episódios',
}

const buildResult = (result) => {
  return keys.map((key) => document.getElementById(key))
    .map((elem) => {
      if(elem.checked === true && (Array.isArray(result[elem.name])) === true){
        const arrayResult = result[elem.name].join('\r\n');
        console.log(arrayResult);
        const newElem = document.createElement('p');
        newElem.innerHTML = `${newKeys[elem.name]}: ${arrayResult}`;
        content.appendChild(newElem);
      } else if(elem.checked === true && (elem.name === 'origin')){
        const newElem = document.createElement('p');
        newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name].name}`;
        content.appendChild(newElem);
      } else if(elem.checked === true && typeof(result[elem.name]) !== 'object'){
        const newElem = document.createElement('p');
        newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name]}`;
        content.appendChild(newElem);
      }
    });
}

btnGo.addEventListener('click', async (event) => {
  event.preventDefault(); // Impede o comportamento padrão do clique (evita recarregar a página, por exemplo).

  if(characterId.value === ''){
    return content.innerHTML = 'É necessário fazer um filtro.'; // Se o campo de identificação do personagem estiver vazio, exibe uma mensagem.
  }

  const result = await fetchApi(characterId.value); // Chama uma função fetchApi() para obter informações do personagem.
  if(content.firstChild === null){
    conteinerResult.className = 'result-style'; // Adiciona uma classe ao elemento conteinerResult.
    image.src = `${result.image}`; // Define a fonte da imagem do personagem.
    buildResult(result); // Chama a função buildResult() para construir e exibir o resultado na página.
  } else {
    content.innerHTML = ''; // Limpa o conteúdo existente.
    conteinerResult.className = 'result-style'; // Adiciona uma classe ao elemento conteinerResult.
    image.src = `${result.image}`; // Define a fonte da imagem do personagem.
    buildResult(result); // Chama a função buildResult() para construir e exibir o resultado na página.
  }
});


btnReset.addEventListener('click', () => location.reload());