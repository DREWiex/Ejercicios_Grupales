// EJERCICIO 2: Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

var frase = prompt("Indica una frase: ");
console.log(frase);
var letra = prompt("Indica una letra: ");
console.log(letra);
var cont = 0

for (let i = 0; i < frase.length; i++) {
   if (frase[i] == letra) {
    cont++
   }
}
//alert(cont)
// alert("La letra " + letra + " se repite " + cont + " veces.")
alert(`La letra ${letra} se repite ${cont} veces.`)