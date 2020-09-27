let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe un número"));
let num3 = parseInt(window.prompt("Escribe un número"));

(num1+num2)===num3 ? window.alert(num1 +" + "+ num2 + " es igual a "+ num3) : window.alert(`${num3} no es la suma de ${num1} y ${num2}`)