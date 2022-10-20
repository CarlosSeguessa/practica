// función que reciba un valor cualquiera y lo muestre ocupando
// console.log()

const valor = (a) => console.log(a)
valor(5)

// La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

// function multiply (a, b) {
//   a * b
// }

function multiply (a, b) {
  return a * b
}

console.log(multiply(2, 5))

// función que reciba dos valores y devuelva la suma de ellos.

const suma = (a, b) => a + b

console.log(suma(2, 5))

// función que reciba un número entero y
// muestre un error si el tipo de dato pasado es de otro tipo.

const entero = (a) => {
  if (typeof a === 'number') {
    return a
  }
  return 'Error'
}
console.log(entero('sdwa'))

// función autoejecutable que muestre "muuu" en pantalla.

const autoejecutable = (() => console.log('muuu'))()
