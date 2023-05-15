const alternar = document.getElementsByClassName('alternar')[0];

//console.log(alternar)

alternar.addEventListener('click',function(e) {
    e.currentTarget.classList.toggle('activo')
})

/*classList > representa la lista de clases asignadas a un elemento toggle cambiar> nos premite prender o apagar una clase de este objeto add > agregar clase
remove > quitar clase/s
*/

