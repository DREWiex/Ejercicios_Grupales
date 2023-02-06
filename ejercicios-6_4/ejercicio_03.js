//ejercicio 03//
//Suma o resta (según elija el usuario) dos números reales//
var n1 = parseFloat(prompt("Por favor, escriba un número"));
console.log(n1);
var n2 = parseFloat(prompt("Gracias, por favor, escriba otro número"));
console.log(n2);
var sumrest = prompt("Escribe '+' si quieres sumarlos, o escribe '-' si quieres restarlos");
console.log(sumrest);
var result = 0;

/*
if (sumrest == '+') {
    result = (n1+n2);
    alert(result);
}

if (sumrest == '-') {
    result = (n1-n2);
    alert(result);
}
*/

if (sumrest == '+') {
    result = (n1+n2);
    alert(result);
} else {
    (sumrest == '-');
    result = (n1-n2);
    alert(result);
}

console.log(result);