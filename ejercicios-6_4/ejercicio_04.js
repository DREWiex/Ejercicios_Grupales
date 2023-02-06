//Ejercicio 04//
// Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)

const USER = ("Memet");
console.log(USER);
const PASS = (123456);
console.log(PASS);

function login() {
    var user = prompt("Usuario:");
    console.log(user);
    var pass = prompt("Contraseña:");
    console.log(pass);
}

login();

/*                                  While Try
if (user == USER && pass == PASS);
    alert("Acceso concedido")
    while (user != USER || pass != PASS);
        alert("Usuario/Contraseña incorrectos. En 3 intentos será bloqueada la cuenta");
// }
while(user != "Memet" || pass != 123456) {
    alert("Usuario/Contraseña incorrectos. En 3 intentos será bloqueada la cuenta");

}   else {
    alert("Acceso concedido");
    }
*/


    for (let i = 0; i < cont; i++){
        if (user != USER || pass != PASS) {
            alert("Usuario/Contraseña incorrectos. En 3 intentos será bloqueada la cuenta")
        } else {login()
        }
    }

    // if (user == USER && pass == PASS){
    //     alert("Acceso Concedido")
    for (let i = 0; i < cont; i++) {
        if (user != USER || pass != PASS) {
            alert("Usuario/Contraseña incorrectos. En 3 intentos será bloqueada la cuenta")
        } else {login()
        }
    }

    // }
                                    // If Tries, no looping//

// if (user == USER && pass == PASS){
//     alert("Acceso concedido");
// } else {
//     alert("Te quedan 2 intentos");
//     if (user == USER && pass == PASS){
//         alert("Acceso concedido");
//     } else {
//         alert("Te queda 1 intento");
//         if (user == USER && pass == PASS);{
//             alert("Acceso concedido")
//         } else {
//             alert("Usuario bloqueado. Contacte con el administrador de la cuenta.")
//         }
//     }
// }