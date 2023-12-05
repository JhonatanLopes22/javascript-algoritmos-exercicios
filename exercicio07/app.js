function convertTemperature() {
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celsius = 5 * ((fahrenheit - 32) / 9);
    document.getElementById('result').innerHTML = "A temperatura em Celsius é: " + celsius;
}