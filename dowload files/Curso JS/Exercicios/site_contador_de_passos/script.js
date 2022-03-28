function calcular() {
    let ini = document.getElementById('inicio')
    let inicio = parseInt(ini.value)

    let f = document.getElementById('fim')
    let fim = parseInt(f.value)

    let p = document.getElementById('passo')
    let passo = parseInt(p.value)

    let resposta = document.getElementById('res')

    if (f.value.length == 0 || ini.value.length == 0 || p.value.length == 0 ) {
        resposta.innerHTML = `Insira as informações corretamente`

    } else {
        resposta.innerHTML = `Contando: <br>`

        if (passo <= 0) {
            alert('Passo invalido considerando  PASSO 1')
            passo = 1
        }
        if (inicio < fim) {   
            for (let i=inicio; i <= fim; i += passo) {
                resposta.innerHTML += `\u{1F449} ${i} `
            }

        } else {
            for(let i=inicio; i >= fim; i -= passo){
                resposta.innerHTML += `\u{1F449} ${i} `
            }
        }
    
            
        resposta.innerHTML += `\u{1F3C1}`
    }
} 
       