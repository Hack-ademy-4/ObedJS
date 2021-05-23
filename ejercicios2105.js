//Escribe una función que devuelve el múltiplo más alto de un valor y un límite sobre el cual calcularlo.
/* ejemplo => maxMulpile(2,7) == 6  
ejemplo => maxMulpile(3,10) == 9
ejemplo => maxMultiple(4, 33) == 32
 */

function maxMultiple(n, limit) {
    let i = 0;
    let result = 0; 
    while (result <= limit) {
        result = (i * n);
        i++;
    }
    return result - n;
}
console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
console.log(maxMultiple(4, 33));



//Suma todo los valores en un rango de un array

/* function sumAll(arr) { 
    // code...
  }
  sumAll([1,4]); //should return 10.
  sumAll([1,5]); //should return 15. 
  sumAll([5,1]); //should return 15. 
  sumAll([5,5]); //should return 5. */


  function sumAll (arr) {
    arr.sort((a, b) => a - b)
    let inicio = arr[0];
    let fin = arr[1];
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
      suma += i;
    }
    return suma;
  }
  console.log(sumAll([1,4])); 
  console.log(sumAll([1,5])); 
  console.log(sumAll([5,1])); 
  console.log(sumAll([5,5])); 


//Escribe una función que tome una lista de cadenas y devuelva cada línea precedida por el número correcto.
// La numeración comienza en 1. El formato es: n: cadena. Observe los dos puntos y el espacio intermedio.
/* ex. number ([]) => []
number (["a", "b", "c"]) => ["1: a", "2: b", "3: c"] */
