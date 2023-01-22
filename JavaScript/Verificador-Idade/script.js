function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > anoatual){       /* se quiser podemos usar o "Number(fano.value)" 
                                                                   para ficar uma conversão mais precisa*/
        window.alert('[ERRO!] Por favor verifique os dados e tente novamente.')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        res.style.textAlign = 'center'

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <6){
                //criança ate 6
                img.setAttribute('src', 'criança-homem-ate-6-anos.png')
                document.body.style.background = '#c3977c'
            }else if (idade < 12){
                //criança ate 12
                img.setAttribute('src', 'criança-homem-ate-12-anos.png')
                document.body.style.background = '#bc5a23'
            }else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'adolescente-homem-ate-19-anos.png')
                document.body.style.background = '#a2a09b'
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
                document.body.style.background = '#f2c08d'
            }else if (idade < 70){
                //velho
                img.setAttribute('src', 'homem-velho.png')
                document.body.style.background = '#e6b290'
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
                document.body.style.background = '#5b788a'
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <6){
                //criança ate 6
                img.setAttribute('src', 'criança-mulher-ate-6-anos.png')
                document.body.style.background = '#eed4cb'
            }else if (idade < 12){
                //criança ate 12
                img.setAttribute('src', 'criança-mulher-ate-12-anos.png')
                document.body.style.background = '#997865'
            }else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'adolescente-mulher-ate-19-anos.png')
                document.body.style.background = '#fcba72'
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
                document.body.style.background = '#788b84'
            }else if (idade < 70){
                //velha
                img.setAttribute('src', 'mulher-velha.png')
                document.body.style.background = '#2d3f27'
            }else {
                //idosa
                img.setAttribute('src', 'idosa.png')
                document.body.style.background = '#cabfc5'
                
            }
        }
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
    }
}
