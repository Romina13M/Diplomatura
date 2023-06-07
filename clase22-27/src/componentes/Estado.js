import { useState } from "react";

const EjemploEstado1 = props =>{

    const [activo, setActivo] = useState(true);

const toggleActivo = e => {
    setActivo(!activo);
}

return(
    <div>
        <input type="text" placeholder="clicear boton" disabled={!activo} />
        <button onClick={toggleActivo}>{activo ? 'Desactivar' : 'Activar'}</button>
    </div>
)
}


const EjemploEstado2 = props => {

const [counter, setCounter] = useState(0);

return(
<div className="container">
<div className="counter">
<h3>{`contador:  ${counter}`}</h3>
</div>
<div className="button">
<button className="sucess" onClick={() => setCounter(counter +1)}> + </button>
<button className="error" onClick={() => setCounter(counter - 1)}> - </button>
        </div>
    </div>
    )
} 

export {
    EjemploEstado1,
    EjemploEstado2
}
