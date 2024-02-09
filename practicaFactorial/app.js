function calcularFactorial() {
    // Acá usaré el DOM para traer los datos que digite el usuario
    let numero = document.getElementById("numero").value;

    // Verifico si es válido, uso isNaN para detectar que sea un número, en caso de que no sea número será true
    if (isNaN(numero) || numero < 0) {
      alert("Error: Por favor ingrese un número válido.");
      return;
    }

    // Acá ocurre la matemática por así decirlo, un ciclo for
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }

    // Muestro el resultado con el DOM en el HTML de la siguiente manera:
    document.getElementById("resultado").innerHTML = "<p>El factorial de " + numero + " es: " + factorial + "</p>";
  }