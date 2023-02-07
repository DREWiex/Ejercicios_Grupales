// 5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

var letra = prompt("Por favor, escriba una letra: ");

switch (letra) {
    case "a":                               //if(letra == "a")
        alert("Tu número asociado es el 7");
        break;
    case "b":
        alert("Tu número asociado es el 9");
        break;
    case "c":
        alert("Tu número asociado es el 101");
        break;
    default:
        alert("Lo siento, te has equivocado de letra");
}  