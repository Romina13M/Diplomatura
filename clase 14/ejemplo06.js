const frutas = ['Manzana','Banana','Palta', 'Frutillas' , 'Naranjas' , 'limones' , 'mandarinas'] //manzana seria 0, banana 1, palta 2...etc

console.log(frutas);
console.log(frutas.length); //cantidad

console.log(frutas[2]);

const ultimo = frutas [frutas.length-1]

console.log(ultimo)//frutillas

const seleccionado = 2;

console.log(frutas[seleccionado]); 

for(let i = 0; i<frutas.length ; i++){
    console.log("Tenemos " + frutas[i])

}

for(let i = 0; i<frutas.length ; i++){
    document.write('Tenemos ' + frutas[i] + "<br/>")

}
