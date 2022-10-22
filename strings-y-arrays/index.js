const str = prompt('Escriba un string con varias palabras separadas por comas:')

// convertir el string en un array

const arr = str.split(',')
console.log(arr)

const arr2 = ['hola', 'como', 'estas']

// convertir el array en un string

const str2 = arr2.join(' ')

console.log(str2)
