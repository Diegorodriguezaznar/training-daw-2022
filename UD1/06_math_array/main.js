const numeros = [10, 5, 8, 3, 15, 7];

function analizarArray(arr) {
    const suma = arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
//no me apetece asignarle el valor al primer numero del arry, ya que todos son positivos , si fueran negativos seria otra historia
    let maximo = arr[0];
    let minimo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
    }

    const media = suma / arr.length;

    console.log("Suma:", suma);
    console.log("Mas grande:", maximo);
    console.log("Mas pequeño:", minimo);
    console.log("Media:", media);
}

analizarArray(numeros);