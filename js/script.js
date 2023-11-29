document.getElementById('convertButton').addEventListener('click', function(event) {
    // Obtiene el valor de euros ingresados
    var euros = parseFloat(document.getElementById('eurosInput').value);

    // Tasa de cambio de euros a dólares
    var tasaCambio = 1.10; 

    var dolares = euros * tasaCambio;

    // resultado
    document.getElementById('resultado').innerText = dolares + ' dólares';
});


document.getElementById('dollarConvertButton').addEventListener('click', function(event) {
    var dollars = parseFloat(document.getElementById('dollarsInput').value);
    var tasaCambio = 0.91; 
    var euros = dollars * tasaCambio;
    document.getElementById('dollarResultado').innerText = euros + ' euros';
});




