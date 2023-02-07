const USER = "usuario";
const PASS = "password";
let attempts = 3;
let inputuser;
let inputpass;

do {
  inputuser = prompt("Escribe tu usuario");
  inputpass = prompt("Escribe tu contraseña");
  attempts--;
  if(inputuser == USER && inputpass == PASS) {
    alert("Acceso concedido");
  } else {
    alert("Acceso denegado");
  }
} while ((inputuser != USER || inputpass != PASS) && attempts > 0);

if(attempts == 0){
    alert("Intentos agotados")
}