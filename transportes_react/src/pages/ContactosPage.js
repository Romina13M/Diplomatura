import './../style/contactos.css'

const ContactosPage = (props) =>{
    return(
        <main className="holder contacto">
    <div>
    <h2>Contacto Rapido</h2>
    <form action="" className="formulario">
<p>
<label for="">Nombre</label>
<input type="text"/>
</p>
<p>
<label for="">Email</label>
<input type="text"/>
</p>
<p>
    <label for="">Telefono</label>
    <input type="text"/>
</p>
<p className="arriba">
<label for="">Mensaje</label>
<input type="text"/>
</p>
<p>
<input type="submit" value="Enviar"/>
</p>
</form>    
</div>
<div className="datos">
<h2>Otras vias de comunicación</h2>
<p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
<ul>
    <li><i className="fa-solid fa-phone"></i> N27643876684733</li>
    <li><i className="fa-solid fa-envelope"></i> contacto@transportes.com.ar</li>
    <li><i className="fa-solid fa-laptop"></i> Facebook:</li>
    <li><i className="fa-solid fa-dove"></i> Twitter:</li>
    <li><i className="fa-solid fa-mobile-button"></i> Instagram</li>
</ul>

</div>
      

    </main>
    
    )
}

export default ContactosPage;