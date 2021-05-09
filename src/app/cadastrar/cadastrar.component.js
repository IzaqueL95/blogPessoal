

function validar() {
  let nome = window.document.getElementById('nome')
    let testeE = document.querySelector('.formStyle')
    let txtNome = document.querySelector('#txtNome')
   
    if(nome.value.length <=5){
        testeE.style.color = 'black'
      txtNome.innerHTML = 'Nome Invalido'
    } else{
        txtNome.innerHTML = 'Valido'

    }
  }