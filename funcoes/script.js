var corAtiva = false;

function alternarCor() {
    var minhaSecao = document.getElementById("teste");

    // Se a cor estiver ativa, remove-a; caso contrário, adiciona-a
    if (corAtiva) {
        minhaSecao.style.backgroundColor = "";
    } else {
        minhaSecao.style.backgroundColor = "red";
    }

    // Inverte o estado da cor
    corAtiva = !corAtiva;
}

var textoAtivo = false;
function alternarTexto(){
    var meuTexto = document.getElementById("texto");

    if(textoAtivo){
        meuTexto.style.display = 'none';
    }else{
        meuTexto.style.display = 'block';
    }

    textoAtivo = !textoAtivo;
}
