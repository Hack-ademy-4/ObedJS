//escribir una función que combina 2 array de números de forma decreciente, eliminando duplicados.

const arr1 = [1, 2];
const arr2 = [1, 2, 2, 3];

function eliminateDuplicate(arr1, arr2) {
  let combinaDatos = arr1.concat(arr2);
  let orden = combinaDatos.sort((a, b) => {
    b - a;
  });
  let sinRepetidos = Array.from(new Set(combinaDatos));
  return sinRepetidos;
}
console.log(eliminateDuplicate(arr1, arr2));

//escribir una función que acepta una cadena y devuelve la palabra más larga
//"hola a todos y bienvenidos"
//resultado en consola: bienvenidos

const string = "hola a todos y bienvenidos";

function longerString(string) {
  let arr = string.split(" ");
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr[0];
}
console.log(longerString(string));

// devolver los usuarios con el nombre que lleva menos de 4 letras

const Usuarios = [
  {
    name: "Nanci",
    lastName: "aaa",
  },
  {
    name: "Raquel",
    lastName: "bbb",
  },
  {
    name: "Obed",
    lastName: "ccc",
  },
  {
    name: "Arturo",
    lastName: "ddd",
  },
  {
    name: "Benjamin",
    lastName: "eee",
  },
  {
    name: "Francesco",
    lastName: "fff",
  },
  {
    name: "Jabi",
    lastName: "ggg",
  },
];

function getShorterNames(data) {
  let nombres = Usuarios.map((el) => el.name);
  return nombres.filter((el) => el.length <= 4);
}
console.log(getShorterNames(Usuarios));

/* escribir una función, dado en la entrada un array de objetos, vuelva el nombre del mejor jugador, su media de puntuación y comprobar si está inscrito al próximo torneo. */

let jugadores = [
  {
    name: "nico",
    puntuacion: [21, 3, 10, 19],
    proximoTorneo: true,
  },
  {
    name: "nicola",
    puntuacion: [30, 5, 8, 17],
    proximoTorneo: true,
  },
  {
    name: "gracia",
    puntuacion: [10, 3, 5, 6],
    proximoTorneo: false,
  },
  {
    name: "fernando",
    puntuacion: [25, 9, 12, 33],
    proximoTorneo: true,
  },
  {
    name: "chris",
    puntuacion: [18, 30, 9, 8],
    proximoTorneo: false,
  },
  {
    name: "mar",
    puntuacion: [10, 12, 14, 9],
    proximoTorneo: false,
  },
];

getBestPlayer = (data) => {
  let lista = data.map((el) => {
    return [
            el.name, 
            el.puntuacion.reduce((acc, no) =>{
              return acc + no / el.puntuacion.length
            }, 0), 
            el.proximoTorneo
          ];});
          let orden = lista.sort((a, b) => b[1] - a[1]);
          let mejorJugador = `El mejor jugador es ${orden[0][0]}, con puntuación promedio de ${orden[0][1]}, su participación en el próximo torneo ${(orden[0][2]) ? 'está confirmada' : 'no está confirmada'}.`;
          return mejorJugador;
};

console.log(getBestPlayer(jugadores))

