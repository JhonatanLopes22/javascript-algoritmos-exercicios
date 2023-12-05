function somaNumeros() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var soma = Number(num1) + Number(num2);
    document.getElementById('resultado').innerHTML = "A soma é: " + soma;
}