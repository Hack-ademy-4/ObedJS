
// Devuelve un array con los nombres de cada animal
const animals = [{
    'name': 'cat',
    'size': 'small'
  }, {
    'name': 'dog',
    'size': 'small'
  }, {
    'name': 'lion',
    'size': 'medium'
  }, {
    'name': 'elephant',
    'size': 'big'
  }];


  let soloAnimals = animals.map(el => el.name)

  console.log(soloAnimals);


  //Devuelve un array con las iniciales de cada día de la semana.

  const dias = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
    ];

    let iniciales = dias.map(dia => dia.substring(0,3));
    console.log(iniciales);



// Devuelve un array con los números pares 
  const numeros = [1,2,3,4,5,6,7,8,9,10];

  let pares = numeros.filter(pares=>pares%2==0);
  console.log(pares);



/* 
   Generamos un array de n números aleatorios dado un mínimo y un máximo con una función.
    Por ejemplo: 
    - 10 números entre 0/10 . 
    - Luego filtramos sólo los números pares, 
    - duplicamos los números obtenidos y sumamos 10,
    - filtramos estos números para valores > de 5 y < de 50
    - y hagamos la suma final
*/


let randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
let soloPares = randomArray.filter(number => number % 2 == 0);
console.log(soloPares);
