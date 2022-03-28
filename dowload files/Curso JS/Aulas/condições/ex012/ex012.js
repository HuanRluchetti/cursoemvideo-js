var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12){
    console.log(`Está de Manha`)

} else if(hora <= 18) {
    console.log('Está de Tarde')

}else {
    console.log('Está de Noite')
}