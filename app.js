let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function clickConsole() {
    console.log("Se clickó el botón console");
}
function clickPrompt() {
    let ciudadBrasil = prompt("Que ciudad de Brasil haz visitado");
    alert(`Entiendo haz visitado ${ciudadBrasil}`);
}
function clickAlert() {
    alert("Yo amo JS <3");
}
function clickSuma (){
  let numUser1 = prompt("Ingresa un numero");
  let numero1 = parseInt (numUser1);

  let numUser2 = prompt("Ingresa otro numero");
  let numero2 = parseInt (numUser2);
    
  let resultado = numero1 + numero2;

  alert(`El resultado de ${numero1} y ${numero2} es igual a ${resultado}`);
}