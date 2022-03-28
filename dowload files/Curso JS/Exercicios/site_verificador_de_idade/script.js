function verificar() {
    let tn1 = document.getElementById("nascimento")
    let nascimento = Number(tn1.value)
    // para obter a data de nascimento & transformar em número

    let agora = new Date()
    let atual = agora.getFullYear()
    // para obter o ano atual

    let idade = atual - nascimento
    //cálculo para definir a idade
    
    let sexo = document.getElementsByName("radsex")
    let genero = ''
    //para obter o sexo
    
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    //para criar o elemento imagem dentro do js sem uma tag no HTML
    let resultado = document.getElementById("final")

   
    if (tn1.value.length == 0 || tn1.value > atual ){
       alert('[ERRO] Dados preenchidos incorretamente!')
 
    } else if (sexo[0].checked) {
        genero = 'Homen'
        
        resultado.style.textAlign = 'center'

        if(idade >=0 && idade <=10) {
            resultado.innerHTML = `Detectamos um menino de ${idade} anos.`
            img.setAttribute('src', 'criança_menino.png')
            //para atribuir a imagem no resultado
            
        } else if (idade <= 18){
            resultado.innerHTML = `Detectamos um adolescente de ${idade} anos.`
            img.setAttribute ('src','adolescente_m.png')

        } else if (idade < 50) {
            resultado.innerHTML = `Detectamos um adulto de ${idade} anos.`
            img.setAttribute('src', 'adulto.png')

        } else if (idade) {
            resultado.innerHTML = `Detectamos um senhor de ${idade} anos`
            img.setAttribute('src', 'senhor.png')
        }

    } else if (sexo[1].checked) {
        genero = 'Mulher'
        
        if(idade >=0 && idade <=10) {
           resultado.innerHTML = `Detectamos uma menina de ${idade} anos.`
            img.setAttribute('src', 'criança_menina.png')
            
        } else if (idade <= 18){
            resultado.innerHTML = `Detectamos uma adolescente de ${idade} anos.`
            img.setAttribute ('src','adolescente_f.png')

        } else if (idade < 50) {
            resultado.innerHTML = `Detectamos uma adulta de ${idade} anos.`
            img.setAttribute('src', 'adulta.png')

        } else if (idade) {
            resultado.innerHTML = `Detectamos uma senhora de ${idade} anos`
            img.setAttribute('src','senhora.png')
        }
    }

    resultado.appendChild(img)
}   