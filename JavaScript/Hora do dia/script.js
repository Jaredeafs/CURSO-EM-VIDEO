function carregar(){
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
        
    if(hora >= 6 && hora <= 11){
        // console.log('Bom Dia!')
        img.src = 'fotomanha.png'
        document.body.style.background = '#e4cea3'         /*Esse comando é para mudar a cor do fundo do 
                                                      corpo do codigo na hora que essa condição for chamada*/
        msg1.innerHTML = `Tenha um excelente Dia!!`                                                      
     }else if(hora >= 12 && hora <= 17){
        // console.log('Boa Tarde!')
        img.src = 'fototarde.png'
        document.body.style.background = '#f1992c'
        msg1.innerHTML = `Aproveite a sua Tarde!!`
     }else if(hora >=18 && hora <= 23){
        // console.log('Boa Noite!')
        img.src = 'fotonoite.png'
        document.body.style.background = '#020933'
        msg1.innerHTML = `Tenha uma Boa Noite de sono!!`
     }else{
        // console.log('Boa Madrugada!')
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#1f1d22'
        msg1.innerHTML = `A madrugada é onde os pensamentos voam!!`
     }
}
