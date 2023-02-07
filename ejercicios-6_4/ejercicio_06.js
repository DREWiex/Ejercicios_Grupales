// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja

function burbuja() {
    var lista = ["zapato", "pelota", "barco", "queso", "avión"];
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
}
    console.log(burbuja());
    // Mostramos, por consola, la lista ya ordenada