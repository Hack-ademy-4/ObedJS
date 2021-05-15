//escribir una función que calcule el área de radio de 1 a 10
function calculaArea(r) {
    for (let r = 1; r <= 10; r++) {
      console.log(Math.PI * r ** 2);
    }
  }

  calculaArea();

  //escribir un programa que imprima la suma de los 10 primeros números

  let suma = 0;
  for (let i = 0; i <= 10; i++) {
    suma += i;
  }
  console.log(suma);

  //escribir una función que compruebe si un número es par o impar

  function comprobarNum(number) {
    if (number % 2 == 0) {
      console.log(`${number} es un número par`);
    } else {
      console.log(`${number} es un número impar`);
    }
  }

  comprobarNum(20);
  comprobarNum(87);
  comprobarNum(3);

  /* 
//OPERADOR TERNARIO
let num = 10
(num % 2 == 0) ? console.log(`${num} es un número par`) : console.log(`${num} es un número impar`);
*/

  // Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los números impares.

  function printNumbers(n) {
    for (let n = 0; n <= 10; n++) {
      if (0) continue;
      console.log(n);
    }
  }
  printNumbers();

  // Escribir una función que, dados un mínimo y un máximo, cree un número aleatorio entre el mínimo y el máximo