import { FaTrash } from 'react-icons/fa'
import { useState } from 'react';

function Eliminar(){
    const [isOpen, setIsOpen] = useState(false);

    /* fetch("http://localhost:3000/eliminar", {
      method: "D",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      }); */
    return(
        
        <div>
            
            <FaTrash onClick={() => setIsOpen(!isOpen)}/>

            {isOpen && (
                
               <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30 ">
               <div className="bg-moradoClaro rounded-xl m-5 p-6 font-Urbanist w-full text-azul  flex flex-col justify-start items-center text-sm ">
               <h1 className='text-[20px]'>¿Esta segur@ de elminar esta poción?</h1>
                    <div className='flex'>
                        <button className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5" onClick={() => setIsOpen(!isOpen)}>Volver atras</button>
                        <button className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5">Eliminar</button>
                    </div>
                    
               </div>
                    
               </section>
            )}
        </div>
    )
}

export default Eliminar;