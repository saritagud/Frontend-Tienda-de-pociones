import Nav from "./Nav";
import Modal from "./FormCrear";
import Potions from "./Potions";
import Ingredients from "./Ingredients";
import Footer from "./Footer";


function Landing(){

    return(
        <div >

            <Nav/>
            <section className="flex flex-col justify-center text-center w-full h-[70vh] font-principal text-xl font-bold sm:h-[80vh]">
                <h1 className="m-5 text-3xl sm:text-4xl">Encantamientos embotellado, tu dosis de maravillas</h1>
                <Modal/>
            </section>

            <div className="border-t border-azul m-4"></div>

            <section className=" flex flex-col justify-center items-center text-center w-full font-principal text-xl font-bold ">
                <h1 className="text-3xl sm:text-5xl mt-10">Pociones</h1>
                <Potions />
            </section>

            <div className="border-t border-azul m-4"></div>

            <section className=" flex flex-col justify-center text-center w-full  font-principal text-xl font-bold ">
                <h1 className="text-3xl sm:text-4xl mt-10">Lista de Ingredientes</h1>
                <Ingredients />
            </section>

            <Footer/>
        </div>

    )
}

export default Landing;