const objetivo = ['B','R','A','S','I','L'];
const letras = ['A','B','C','D','E','F','G','H',
'I','J','K','L','M','N','O','P','Q','R','S','T','U',
'V','W','X','Y','Z'];

const verificaFimJogo = () => {
    
}

const jogada = (l) => {
    console.log(l)
    verificaFimJogo()
}

const palavra = document.getElementById('palavra')
objetivo.forEach((_,idx) => {
    const letra = document.createElement('DIV')
    letra.setAttribute('class','letra')
    letra.setAttribute('id',`letra${idx}`)
    palavra.appendChild(letra)
})

const botoes = document.getElementById('botoes')
letras.forEach(l => {
    const btn = document.createElement('BUTTON')
    btn.setAttribute('type','button')
    btn.innerHTML = l
    btn.addEventListener('click', () => {
        jogada(btn.innerHTML)
    })
    botoes.appendChild(btn)
})