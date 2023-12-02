function mensagem(){
    let numero = document.getElementById("numero").value
    document.getElementById("resposta").innerText = " O Número Informado Foi: " + numero
    document.getElementById("numero").value = ""
}