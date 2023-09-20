function tocaSomPom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio).play();
}

if (elemento && elemento.localName === 'audio') {
       elemento.play ();
    }
    else {
       //alert('Elemento não encontrado');
       console.log('Elemento não encontrado ou seletor inválido');
    }

}
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList [1];
  const idAudio = `#som_$(instrumental}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  }
  
tecla.onkeydown = function (evento) {

  if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList.add('ativa');
  }

  }
tecla.onkeyup = function () {
  tecla.classList.remove('ativa');
  }

}

