let valores = [8, 1 ,7, 4, 2, 9] 
valores.sort()

for(let i in valores){  //como fazer a mesma coisa de baixo só que de um jeito mais simples
    console.log(valores)
}


/*for (let i=0; i < valores.length; i++){       // Evitar usar o sinal de "=" pois retorna "Undefined"
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}*/

/*
Maneira Burra de se fazer a mesma coisa de cima...
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

*/