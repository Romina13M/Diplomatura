const nombre = 'Romina';
const edad = 34;

console.log(` hola ${nombre}, asi que tenes ${edad} años`);
document.write(`hola ${nombre}, asi que tenes ${edad} años`);

//si sos mayor de edad (21) la cuota es de 500
//si sos menor de 21 la cuota es de 350

const edad1 = 18;
const edad2 = 32;

const mensaje1 = `la cuota para personas de ${edad1} es de ${edad1 >= 21 ? 500: 350} `;

console.log(mensaje1)

const mensaje2 = `la cuota para personas de ${edad2} es de ${edad2 >= 21 ? 500: 350} `;

console.log(mensaje2)