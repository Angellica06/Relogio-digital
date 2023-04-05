var intervald = window.setInterval(() => {carregar()

}, 1000);

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = ` ${hora}:${min}:${seg}.`

    if(hora >= 0 && hora < 12) {
      img.src = 'imagens/fotomanhã.jpg'
      document.body.style.background = '#e2cd9f'

    } else if(hora >= 12 && hora <= 17) {
      img.src = 'imagens/fototarde.jpg'
      document.body.style.background = '#b9846f'

    } else {
      img.src = 'imagens/fotonoite.jpg'
      document.body.style.background = '#063254'
    }

}