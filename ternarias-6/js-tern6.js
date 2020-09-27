let nota1 = parseInt(window.prompt("Nota del primer examen"));
let nota2 = parseInt(window.prompt("Nota del segundo examen"));
let nota3 = parseInt(window.prompt("Nota del tercer examen"));

let suma;

nota1>nota2? suma=nota1+nota3 : suma=nota2+nota3


if(suma<5) {
  window.alert ("Has suspendido");
} else if (suma<6){
  window.alert ("Suficiente");

}  else if (suma<7){
  window.alert ("bien");

}  else if (suma<9){
  window.alert ("Notable");

}  else if (suma<10){
  window.alert ("Sobresaliente");

} else {

  window.alert ("xmatricula");
}