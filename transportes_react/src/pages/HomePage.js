import './../style/home.css'


const HomePage = (props) =>{
    return(
        
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, vero quidem alias facere nostrum id nisi repudiandae fugiat quia quaerat nobis beatae delectus dolore, soluta quae cum amet molestiae deleniti!</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita"> Simplemente excelente</span>
                    <span className="autor">Juan Gomez - zapatos.com</span>

                </div>    
                </div>
            </div>
    </main>
    
    )
}

export default HomePage;