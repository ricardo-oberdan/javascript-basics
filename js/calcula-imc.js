function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}


function validaPeso(peso) {
    if (peso >= 0.0 && peso <= 600.0) {
        return true;
    } else {
        return false;
    }
}


function validaAltura(altura) {
    if (altura > 0.3 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}


//var titulo = document.querySelector("h1");
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;
console.log(peso);
console.log(altura);

var imc = calculaImc(peso, altura);
console.log(imc);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    peso = paciente.querySelector(".info-peso").textContent;
    altura = paciente.querySelector(".info-altura").textContent;

    if (!validaPeso(peso)) {
        console.log("Peso inválido!");
        paciente.classList.add("paciente-invalido");
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
        continue;
    }

    if (!validaAltura(altura)) {
        console.log("Altura inválida!");
        paciente.classList.add("paciente-invalido");
        paciente.querySelector(".info-imc").textContent = "Altura inválida";
        continue;
    }

    imc = calculaImc(peso, altura);
    paciente.querySelector(".info-imc").textContent = imc;

}

function mostraMensagem() {
    alert(msg);
}

//botao.addEventListener("click", mostraMensagem);

