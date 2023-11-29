function calcularCalificacion() {
    let nota = parseFloat(document.getElementById("inputNota").value);

    if (nota >= 0 && nota < 3) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Muy pobre";
    } else if (nota >= 3 && nota < 5) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Suficiente";
    } else if (nota >= 6 && nota < 7) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Está bien";
    } else if (nota >= 7 && nota < 9) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Notable";
    } else if (nota >= 9 && nota <= 10) {
        document.getElementById("resultadoCalificacion").innerText = "Calificación: Sobresaliente";
    } else {
        document.getElementById("resultadoCalificacion").innerText = "Nota inválida, ingresa un número entre 0 y 10";
    }
}
