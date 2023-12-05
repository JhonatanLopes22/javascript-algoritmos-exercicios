function calcularSalario() {
    var taxaPorHora = document.getElementById('inputTaxaPorHora').value;
    var horasTrabalhadas = document.getElementById('inputHorasTrabalhadas').value;
    var salario = taxaPorHora * horasTrabalhadas;
    document.getElementById('resultado').innerHTML = "O salário total é: " + salario;
}