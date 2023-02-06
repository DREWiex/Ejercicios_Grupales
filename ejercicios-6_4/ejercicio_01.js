// Solicita al usuario tres números enteros e indícale cuál es el menor.
// Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
// Suma o resta (según elija el usuario) dos números reales
// Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
// Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja

//1
var n1 = parseInt(prompt("Introduce un números"));
console.log(n1);
var n2 = parseInt(prompt("Introduce otro número diferente"));
console.log(n2);
var n3 = parseInt(prompt("Introduce un último número distinto de los otros dos"));
console.log(n3);


if (n1 === n2 && n2 === n3) {
  alert("Error al introducir datos");
} else {
  if (n1 < n2 && n1 < n3) {
    alert(n1 + " es el menor de todos los números indicados");
  } else {
    if (n2 < n3 && n2 < n1) {
      alert(n2 + " es el menor número de todos");
    } else {
      if (n3 < n2 && n3 < n1) {
        alert(n3 + " es el menor número de todos"); //se puede evitar el alert, asumiendo que solo queda esta opción y es true.
      }
    }
  }
}