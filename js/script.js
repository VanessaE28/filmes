const foco = document.querySelector('#foco')
const sinopse = document.querySelector('#sinopse')
const joker = document.querySelector('#joker')
const deadpool = document.querySelector('#deadpool')
const vingadores = document.querySelector('#vingadores')
const harry = document.querySelector('#harry')

joker.addEventListener('click', ()=> {
    foco.src = 'images/joker.jpg'
    sinopse.textContent = 'Em Coringa, Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne (Brett Cullen) é seu maior representante.'
})

deadpool.addEventListener('click', ()=> {
    foco.src = 'images/deadpool.jpg'
    sinopse.textContent = 'Ex-militar e mercenário, Wade Wilson (Ryan Reynolds) é diagnosticado com câncer em estado terminal, porém encontra uma possibilidade de cura em uma sinistra experiência científica. Recuperado, com poderes e um incomum senso de humor, ele torna-se Deadpool e busca vingança contra o homem que destruiu sua vida.'

})

vingadores.addEventListener('click', ()=> {
    foco.src = 'images/vingadores.jpeg'
    sinopse.textContent = 'Após Thanos eliminar metade das criaturas vivas de todo o universo, os heróis sobreviventes precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark vagando perdido no espaço sem água nem comida, Steve Rogers e Natasha Romanov precisam liderar a resistência contra o titã.'

})

harry.addEventListener('click', ()=> {
    foco.src = 'images/harry potter.jpg'
    sinopse.textContent = 'Em Harry Potter e as Relíquias da Morte, o encontro inevitável com Lord Voldemort não pode mais ser adiado. Harry, no entanto, precisa ganhar tempo para encontrar as Horcruxes que ainda estão faltando. E, pelo caminho, descobrir o que são afinal as Relíquias da Morte e como ele pode usá-las contra o Lorde das Trevas.'
})