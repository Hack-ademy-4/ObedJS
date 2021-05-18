
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


  let soloAnimals = animals.map(function(animal) {
      return animal.name
  })
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
  
//result => ['lun', 'mar', 'mie'...]

console.log(dias.slice(1,3))

/* let inicial= dias.forEach(el => el.slice(1, 3) );
console.log(inicial); */







//RESPUESTAS DE FRAN PARA LUEGO VERFICAR

//Easy 😎
        // var array_name = [item1, item2, ...]; 
        
        
 /*        
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
      
      let name= animals.map(function(tipoAnimal) {
          return tipoAnimal.name;
      })
      console.log(name);
      
      //funcional
      
      let tipoAnimal = animals.map(razza=>console.log(razza.name))
      
      //segundo ejercicio
      
      
      //input
      const dias = [
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
      'Domingo'
      ];
      
      let resultado = dias.map(function(dia)
      {
          return dia.substring(0,3);
      })
      //output
      console.log(resultado);
      
      
      //funcional   
      
      let resultado2 = dias.map(dia=>dia.substring(0,3));        
      
      console.log(resultado2); 
      
      
      // terzero esercicio
      
      const numeros = [1,2,3,4,5,6,7,8,9,10]
      
      let pares = numeros.filter(pares=>pares%2==0);
      console.log(pares); */