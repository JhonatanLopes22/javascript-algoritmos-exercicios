function calcularPesoIdeal() {
    var altura = document.getElementById('altura').value;
    var pesoIdeal = (72.7 * altura) - 58;
    document.getElementById('resultado').innerHTML = "Seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg";
}