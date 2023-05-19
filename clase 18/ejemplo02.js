const alumnos =[
{
    nombre: 'Flavia',
    edad: 10
},
{
    nombre: 'Pablo',
    edad: 3
},
{
    nombre: 'Lucas',
    edad: 5
},
{
    nombre: 'Rodrigo',
    edad: 2
},
{
    nombre: 'Daniela',
    edad: 8
}
]

// solo va a mostrar los alumnos que la edad es mayor o igual a 4 >=4
//imprimirlos> recorrer > for

const chicos = alumnos.filter(
    alumno => alumno.edad >=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<li>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}. </li> `)
}
