const numeros = [56, 100, 1245, 80, 43, 50, 34, 789, 234, 4365, 560];

let mayor = 0;

//for(let i = 0; i < bumeros.length; i++){
//    console.log(numeros[i])}

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] >mayor){
        mayor =numeros[i]
    }
}


console.log(`El mayor de estos numeros: ${numeros} es ${mayor}`)