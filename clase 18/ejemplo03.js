const empleados =[
    {
        nombre: 'Flavia',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Ramiro',
        trabajo: 'abogado'
    },
    {
        nombre: 'Rodolfo',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Rodrigo',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Romina',
        trabajo: 'maestra'
    },
    {
        nombre: 'Daniela',
        trabajo: 'veterinaria'
    }
    
]

// me muestre los desarrolladores
//me muestre los NO desarrolladores

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

console.log(desarrollador)

const nodesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(nodesarrollador)