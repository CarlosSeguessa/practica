const arr = [1, 2, 3, 4, 5, 6]

// iterar por todos los elementos con while
let i = 0
while (i < arr.length) {
  console.log(`con while ${arr[i]}`)
  i++
}

// iterar por todos los elementos con for
for (let i = 0; i < arr.length; i++) {
  console.log(`con for ${arr[i]}`)
}

// iterar por todos los elementos con forEach

arr.forEach((element) => {
  console.log(`con forEach ${element}`)
})

// sumarle 1 a todos los elementos del array
arr.map((element) => {
  return console.log(`con map ${element + 1}`)
})

const arr2 = [...arr]

arr2.map((element) => {
  return console.log(`copia con map ${element + 1}`)
})

// calcular promedio del array
arr.reduce((acc, element) => {
  return console.log(`con reduce ${acc + element}`)
})

// array vacio con 20 numeros aleatorios
const arr3 = []

for (let i = 0; i < 20; i++) {
  arr3.push(Math.floor(Math.random() * 100))
}

console.log(arr3)

const arr4 = []

for (let i = 0; i < 5; i++) {
  arr4.push(prompt('ingrese un numero'))
}

console.log(arr4)

const arrColors = ['azul', 'amarillo', 'rojo', 'verde', 'cafe', 'rosa']
const chossedColor = prompt('ingrese un color')

if (!arrColors.includes(chossedColor)) {
  console.log('el color no existe')
} else {
  console.log('el color existe')
}
