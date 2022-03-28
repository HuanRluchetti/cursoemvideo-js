var agora = new Date()
var hora = agora.getHours()
// definindo hora

var img = document.getElementById("imagem")
// definindo a imagem

var tempo_real = document.getElementById("tempo_real")
tempo_real.innerHTML = `Agora são ${hora} horas.`
 // elementos da div

if (hora < 12) {
    img.src = "imagem_amãnhecer_200_redonda.jpg"
    // mudar imagem de acordo com a hora.
    document.body.style.backgroundColor = "rgb(248,220,101)"
    // mudar a cor de fundo.
} else if (hora <= 18) {
    img.src = "imagem_entardecer_200_redonda.jpg"
    document.body.style.backgroundColor = "rgb(147,97,7)"

} else {
    img.src = "imagem_anoitecer_200_redonda.jpg"
    document.body.style.backgroundColor = "rgb(10,20,30)";
}