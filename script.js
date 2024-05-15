
const btnLink = document.getElementById('btn-link');
const txtSend = document.getElementById('txt-send');
const link = document.getElementById('link');
const mensagem = document.getElementById('mensagem');
const numero = document.getElementById ('number')


function handlebtnLink(){
    let telefoneLink = 'https://wa.me/55'+numero.value
    link.innerText = telefoneLink
    mensagem.innerText = "Clique no link para copiar"
    link.style.border='1px solid black'
    link.style.borderRadius='5px'
}

function handletxtSend() {
  let url = 'https://wa.me/55'+numero.value;
  let win = window.open(url, '_blank');
  win.focus();
}

function copiarLink(){
    navigator.clipboard.writeText(link.textContent)
    .then(()=> mensagem.textContent = 'Link copiado com sucesso')
}

btnLink.addEventListener('click', handlebtnLink);
txtSend.addEventListener('click', handletxtSend);
link.addEventListener('click', copiarLink)
