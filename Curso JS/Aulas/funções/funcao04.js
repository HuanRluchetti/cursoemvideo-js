let fat = function calcular(x){
    let res = 1
    for(let i=x; i > 1; i--){
        res = res * i // sempre usar a tecnica de criar uma  avariavel v=1 para multiplicar usando o "i"         
    }
    return res  
}

console.log(fat(5))