// FUNÇÕES PÁGINA PRINCIPAL //

function mudarTexto() {
    let txt1 = document.getElementById("txt1");
    let txt2 = document.getElementById("txt2");
    let txt3 = document.getElementById("txt3");

    if (txt1.style.display !== "none") {
        txt1.style.display = "none";
        txt2.style.display = "block";
    } else if (txt2.style.display !== "none") {
        txt2.style.display = "none";
        txt3.style.display = "block";
    } else {
        window.location.href = "exercicios.html"
    } 
    
}

