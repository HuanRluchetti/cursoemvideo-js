let num = document.querySelector('input#idnum')
let fim = document.querySelector('div#final')
let tabela = document.querySelector('select#tabela')
let numeros = []

function numOk(n) {
    if (Number(n) >= 1 && Number(n) <=100 ){
        return true
    } else {
        return false
    }
}

function Lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (numOk(num.value) && !Lista(num.value, numeros)) {
        numeros.push(Number(num.value)) // adicionar como number e não como string
        //numeros.push(num.value) <-- jeito errado pois na função esta de outro jeito
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tabela.appendChild(item)
        fim.innerHTML = ``
    } else {
        alert ('Valor invalido ou já existente.')
    }
    num.value = `` // -> Apaga oque esta escrito no input
    num.focus() // -> Como um clique de mouse dentro do input 
}

function finalizar(){
    if (num.lengh == 0 ){
        alert("Valores não adicionado. Adicione um valor para continuar.")

    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0 
        for (let i in numeros){
            soma += numeros[i] 
            if (numeros[i] > maior )
            maior = numeros[i]
            if (numeros[i] < menor)
            menor = numeros[i]
        }
        media = soma / total


        fim.innerHTML = ``
        fim.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        fim.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        fim.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        fim.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        fim.innerHTML += `<p>A média do valores digitados é ${media}.</p>`
    }
}
