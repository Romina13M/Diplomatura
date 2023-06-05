import {EjemploProps01, EjemploProps02, EjemploProps03, EjemploProps04, EjemploProps05} from '../componentes/Props' ;

const name = 'Pablo'
const frutas =['manzanas','bananas','peras','paltas']


const mostrarValor = valor =>{
    console.log(valor)
}




const Ejemplo1 = props =>{
    return(
        <div>
        <h1>Ejemplo de propiedades</h1>
        <h2>propiedad simple o reutilizable</h2>
        <EjemploProps01 nombre ='flavia' />
        <EjemploProps01 nombre ={name} />
        <hr/>
        <h3>listado de elementos</h3> 
        <EjemploProps02 elementos={frutas} />
        <hr/>
        <h3>multiples propiedades</h3>
        <EjemploProps03 titulo='noticia x' subtitulo='aca estamos aprendiendo react' cuerpo='soy el cuerpo de la noticia' />
        <hr/>
        <h3>Evento- al tener cambiar valor funciona</h3>
        <EjemploProps04 cambiarValor={mostrarValor} />
        <br/>
        {/*este ejemplo no funcionaria porq le falta la propiedad
        <EjemploProps04 /> */}
        <h3>Evento- tenemos con if que controla antes</h3>
        <EjemploProps05 eventoClick={mostrarValor} />
        {/*en este ejemplo no se rompe la pagina xq controlamos desde if*/}
        <EjemploProps05 />
        </div>
    )
}


export default Ejemplo1;
