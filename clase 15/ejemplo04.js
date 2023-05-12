function allParraf(){
    
    const allparraf = document.getElementsByTagName('p');

    const num = allparraf.length;
    //console.log(num);

    alert (`Hay ${num} elementos <p> en este documento`)
    
}



function caja1P(){

const caja1P = document.getElementById('caja1');//id en el div

const caja1parrafos = caja1P.getElementsByTagName('p');

console.log(caja1parrafos);

const num = caja1parrafos.length;

console.log(num);

alert(`Hay ${num} elementos <p> en este documento`)
console.log(`Hay ${num} elementos <p> en este documento`)

}

function caja2p(){ //nombre de funcion

    const caja2p = document.getElementById('caja2');

    const caja2parrafos = caja2p.getElementsByTagName('p');

    console.log(caja2parrafos)

    const num= caja2parrafos.length;

    console.log(num);

    alert(`hay ${num} elementos <p> en el div caja 2`)
    
}

