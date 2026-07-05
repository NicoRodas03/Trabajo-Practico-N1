const btnModo = document.getElementById("btn-modo");
if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("modo-oscuro");
    btnModo.textContent = "modo claro";
} else {
    btnModo.textContent = "modo oscuro";
}

btnModo.addEventListener("click", () => {
    
    document.body.classList.toggle("modo-oscuro");
    
    const modoActivo = document.body.classList.contains("modo-oscuro");
    
    if (modoActivo) {
        btnModo.textContent = "modo claro";
    } else {
        btnModo.textContent = "modo oscuro";
    }
});