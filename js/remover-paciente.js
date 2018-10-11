var pacientes = document.querySelectorAll(".paciente");
/*
console.log(pacientes);

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});
*/

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("click", function() {
    console.log("Fui clicado");
});

tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
});
