const datosUsuarios =[
    {
        nombre: 'Flavia',
        password: '1234'
    }, 
    {
        nombre: 'Laura',
        password: '5678'
    }, 
    {
        nombre: 'Leonardo',
        password: 'abcder'
    }, 
    {
        nombre: 'Rodolfo',
        password: 'dfghij'
    }, 
    {
        nombre: 'Romina',
        password: 'abcd123'
    }
]

const soloPasword = datosUsuario.map(function(c){
    return c.password;
})

console.log(soloPasword)

