function pegarValor() {
    const botaoDeOpcao = document.querySelector('input[name="checkin"]:checked');
    var minhaSecao = document.getElementById('sub-secao');
    var certo = document.getElementById('acertou');
    var errado = document.getElementById('errado');
    let acertou = 0;
   if(botaoDeOpcao.value == 'spotify'){
        minhaSecao.style.borderColor = 'green';
        acertou = 1;
   }else{
        minhaSecao.style.borderColor = 'red';
   }


   if(acertou == 1){
        errado.style.display = 'none';
        certo.style.display = 'block';
        
   }else{
        certo.style.display = 'none';
        errado.style.display = 'block';
   }
  
}