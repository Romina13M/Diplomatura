const edad = parseInt(prompt('Ingrese su edad ', ""));

if(Number.isNaN(edad)){
    document.write('Debe ingresar un valor numerico.')
} else if(edad >=18){
    document.write('PODES CONDUCIR')
} else{
    document.write('NO PODES CONDUCIR')
}


