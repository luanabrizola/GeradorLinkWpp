
const btnLink = document.getElementById('btn-link');
const txtSend = document.getElementById('txt-send');
const link = document.getElementById('link');
const mensagem = document.getElementById('mensagem');
const numero = document.getElementById ('number')


function handlebtnLink(){
    let telefone = numero.value.replace(/\D/g, '');
    let telefoneLink = 'https://wa.me/55'+ telefone;
    link.innerText = telefoneLink
    mensagem.innerText = "Clique no link para copiar"
    link.style.border='1px solid black'
    link.style.borderRadius='5px'
}

function handletxtSend() {
  let telefone = numero.value.replace(/\D/g, '');
  let url = 'https://wa.me/55'+ telefone;
  let win = window.open(url, '_blank');
  win.focus();
}

function copiarLink(){
    navigator.clipboard.writeText(link.textContent)
    .then(()=> mensagem.textContent = 'Link copiado com sucesso')
}

function mascara(telefone){
  telefone = telefone.replace(/\D/g, '');
  telefone = telefone.slice(0,11);
  telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
  return telefone;
}

function validarNumero(){
  const numeroValido = numero.value.length === 15;
  if (numeroValido){
    numero.style.color = 'green'
    btnLink.disabled = false;
    txtSend.disabled = false
  } else {
    numero.style.color = 'black'
    btnLink.disabled = true;
    txtSend.disabled = true;
  }
}

numero.addEventListener('input', ()=> {
  numero.value = mascara(numero.value);
  validarNumero()
})


btnLink.addEventListener('click', handlebtnLink);
txtSend.addEventListener('click', handletxtSend);
link.addEventListener('click', copiarLink)

btnLink.disabled = true;
txtSend.disabled = true;