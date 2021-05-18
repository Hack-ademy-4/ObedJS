// 1. escribir una función que calcule el área de radio de 1 a 10
function calculaArea(r) {
  for (let r = 1; r <= 10; r++) {
    console.log(Math.round(Math.PI * Math.pow(r, 2)));
  }
}
calculaArea();

//2. escribir un programa que imprima la suma de los 10 primeros números

let suma = 0;
for (let i = 0; i <= 10; i++) {
  suma += i;
}
console.log(suma);

//3. escribir una función que compruebe si un número es par o impar

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

//CON OPERADOR TERNARIO
function checkNum(num) {
  num % 2 == 0
    ? console.log(`${num} es un número par`)
    : console.log(`${num} es un número impar`);
}
checkNum(59);

//4. Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los números impares.

function printNumbers(n) {
  for (let n = 0; n <= 10; n++) {
    if (n % 2 !== 0) continue;
    console.log(n);
  }
}
printNumbers();

//5. Escribir una función que, dados un mínimo y un máximo, cree un número aleatorio entre el mínimo y el máximo

function radomNum(minN, maxN) {
  console.log(Math.floor(Math.random() * (maxN - minN) + minN));
}
radomNum(18, 98);

//6. Hacer una función que calcule la hipotenusa de 2 triángulos rectángulos de catetos 3, 4 y de catetos 5,6.

//donde a y b son catetos del triángulo y c la hipotenusa de triángulo.
function getHipotenusa(a, b) {
  let c = Math.pow(a, 2) + Math.pow(b, 2);
  console.log(Number.parseFloat(Math.sqrt(c)).toFixed(2));
}
getHipotenusa(3, 4);
getHipotenusa(5, 6);

/*7. Escribir un programa que imprima en consola todos los números del 1 al 100.
      Para los múltiplos de 3 imprime "java".
      Para los múltiplos de 5 imprime "script".
      Para los múltiplos de 3 y 5 imprime "javascript” */

function print100 (n) {
  for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0) {
      console.log("Java");      
    } if (n % 5 == 0) {
      console.log("Script");
    } if (n % 3 == 0 && n % 5 == 0) {
      console.log("Javascript");
    } else {
      console.log(n);
    }  
  }
};
print100();

// 8. Calcular la serie de fibonacci que devuelve hasta n-números bajo forma de array. Ejemplo 9 => [1,1,2,3,5,8,13,21,34].

let n = 9
let fib = [0, 1];
for(let i = fib.length; i <= n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 


// 9. Escribir una función que convierte un número entero en binario.

function getBinario(num){
   console.log(num.toString(2));
}
getBinario(48);

// 10. Escribir una función que convierte un número de milisegundos a horas.

function convertHoras(milsec) {
 console.log((milsec / (1000 * 60 * 60)).toFixed(2)) ;

}
convertHoras(48515326);