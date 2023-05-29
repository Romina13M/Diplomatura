var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota:7
    },   {
        nombre: 'Pedro Rodriguez',
        nota:4
    },  {
        nombre: 'Roxana García',
        nota:8
    },  {
        nombre: 'Luciana Lopez',
        nota:5
    },  {
        nombre: 'Fernanda Gimenez',
        nota:6
    }, {
        nombre: 'Florencia Martinez',
        nota:10
    },  {
        nombre: 'Raúl Sanchez',
        nota:7
    },  {
        nombre: 'Sandar Figueroa',
        nota:8
    }, 
];

constaprobados = alumnos.filter((alumno) => alumno.nota >= 7);

console.log(aprobados);
