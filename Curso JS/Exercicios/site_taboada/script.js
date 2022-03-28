function calcular() {
    let n = document.getElementById('numero')
    let numero = parseFloat(n.value)

    let r1 = document.getElementById ('resultado')

    if (n.value.length == 0){
        alert('[ERRO]! Campo não preenchido.')

    } else {
        r1.innerHTML = "" // limpa o select antes de adicionar a tabuada

        for (let i=1; i <= 10; i++ ){
            let tab = i * numero
            let res = document.createElement('option')
            //-->cria o elemento option

            res.text = `${numero} X ${i} = ${tab}` 
            // -->adiciona texto dentro do elemento criado

            res.value = `r1${i}` 
            //--> util para quando for trabalhar com outras linguagens
            
            r1.options.add(res)  // r1.appendChild(res) \\-->adiciona o elemento option sentro do select
                //--> os dois acima funcionam da mesma forma.<--\\
        }
    }
}