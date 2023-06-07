import { EjemploEstado1, EjemploEstado2 } from "../componentes/Estado";

import '../styles/estado.css';


const Ejemplo2 = props => {
    return(
        <div>
        <h1>Ejemplo Estados Hook </h1>
        <EjemploEstado1/> 
        <hr />
        <EjemploEstado2/>
        
        </div>     
    )
}

export default  Ejemplo2 ;