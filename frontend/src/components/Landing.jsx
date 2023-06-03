import Nav from "./Nav";
import Modal from "./FormCrear";
import Pociones from "./Pociones";
import Ingredients from "./Ingredients";
import Footer from "./Footer";


function Landing(){

    return(
        <div className="">
            <Nav/>

            <section>
                <h1>Encantamiento embotellado, tu dosis de maravillas</h1>
                <Modal/>
                
            </section>

            <section>
                <h1>Pociones</h1>
                <Pociones/>
            </section>

            <section>
                <h1>Lista de Ingredientes</h1>
                <Ingredients/>
            </section>

            <Footer/>
        </div>

    )
}

export default Landing;