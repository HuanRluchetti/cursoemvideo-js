let ntext = document.getElementById('numero')
let numeros = []
let resultado = document.getElementById("resultado")

function adicionar() {
    let num = Number(ntext.value)
    
    
    if (ntext.value.length == 0 || num >= 101 || num <= 0 || numeros.find(element => element == num)) {
        alert("[ERRO]! Valor já existente ou inserido incorretamente.")

    } else {
        resultado.innerHTML = ``
        numeros.push(num)

        for (let i in numeros) {
            let option = document.createElement('option')
            option.text = `Valor ${numeros[i]} adicionado.`
            option.value = `v${i}`
            resultado.appendChild(option)
            
        }
                
        
    }
    
}



function verificar() {
    let fim = document.getElementById('fim')
    let fim2 = document.createElement('div')
    let somar = 0
    fim.innerHTML = ``
    fim.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`

    //numeros.sort((a, b) => a-b)
    numeros.sort(function(a,b) {
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1
        } else {
            return 0 
        }

    })

    for(let i in numeros){
        fim.innerHTML = `<p>O maior valor informado foi ${numeros[i]}.</p>`
        
    }
    fim.innerHTML += `<p>O menor valor informado foi ${numeros[0]}.</p>`

    for (let i in numeros ) {
        somar += numeros[i] 
    }
    fim.innerHTML += `<p>Somando todos os valores, temos ${somar}. <br></p> `
    fim.innerHTML += `<p>A media dos valores digitados é ${somar / numeros.length}.</p>`

    
}

