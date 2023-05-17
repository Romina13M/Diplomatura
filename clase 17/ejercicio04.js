const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(num => num %2 === 0);

//% > el operador resto (%) devuelve el resto de la division entre 2 numeros.
//sabes que los numeros pares 2,4,6,8,10 > dan resto 0
// => funcion de flecha o arrow function
//===es en tipo y valor

//Las funciones de flecha o arrow functions son una nueva forma de definir funciones y hay distintas variantes en la sintaxis: Funcion de un solo parametro. Al crear un arrow funcito de un solo parametro no es necesario escribir los parentesis tampoco es necesario escribir las llaves.



console.log(numeros); //todos
console.log(pares); //2,4,6,8,10