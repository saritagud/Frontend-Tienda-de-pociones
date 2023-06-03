import Nav from "./Nav";
import Modal from "./FormCrear";
import Potions from "./Potions";
import Ingredients from "./Ingredients";
import Footer from "./Footer";


function Landing(){

    return(
        <div className="bg-moradoClaro">
            <Nav/>

            <section className=" flex flex-col justify-center text-center w-full h-[70vh] font-principal text-xl font-bold ">
                <h1 className="m-5">Encantamientos embotellado, tu dosis de maravillas</h1>
                <Modal/>
                
            </section >
            <div className="border-t border-black m-4"></div>
            <section className=" flex flex-col justify-center text-center w-full font-principal text-xl font-bold ">
                <h1>Pociones</h1>
                <Potions/>
            </section>
            <div className="border-t border-black m-4"></div>
            <section className=" flex flex-col justify-center text-center w-full  font-principal text-xl font-bold ">
                <h1>Lista de Ingredientes</h1>
                <Ingredients/>
            </section>

            <Footer/>
        </div>

    )
}

export default Landing;