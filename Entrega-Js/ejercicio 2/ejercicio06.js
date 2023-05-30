const cuadrado = document.getElementsByClassName('cuadrado')[0];
const rojo = document.getElementById('rojo');
const borde = document.getElementById('borde');
const reset= document.getElementById('reset');

rojo.addEventListener('click', function(){
    cuadrado.classList.add('rojo') //rojo en amarillo es el nombre de la clase en css
})

borde.addEventListener('click', function(){
    cuadrado.classList.add('borde')
})

reset.addEventListener('click', function(){
    cuadrado.classList.remove('borde', 'rojo')
})


