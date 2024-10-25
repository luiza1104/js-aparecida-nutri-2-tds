var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); 
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido");
}

if( alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}






