let num = [5, 8, 2, 9, 3]
num[5] = 1 // criara um elemento caso ainda não tenha sido criado

num[3] = 4 //caso o elemnto ja exista ele ira subistituir o valor 

num.push(7) //criara o elemento sempre no fim do array se tornando o ultimo valor

console.log(`Noso vetor é o ${num} e ele possui ${num.length} elementos`)//num.length identifica quantos elementos existem na array

console.log(`Vou colocalos em ordem crescente ${num.sort()} `)//num.sort() coloca os elementos da array em ordem crescente de acordo com os valores mas na funciona com dois dijitos ex: 15, 11 

console.log(num[0]) // me mostra o valor do elemento indicado

let pos = num.indexOf(8) // Retorna a chave do elemento onde o valor respectivo está 
if (pos == -1){          // Caso esse valor nao exista ele retornara -1
    console.log('O valor não foi encontrado')

} else {
    console.log(`O valor está na posição ${pos}`)
}

if (num[0] == 1) {
    console.log(num[0])

} else {
    console.log('Ese valor não existe')
}