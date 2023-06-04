
import {FaWindowClose} from 'react-icons/fa'

function ModalDetalles({isOpen, setIsOpen, potionId}){
    
    return(
        <div>
        {isOpen && (
            
            <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30">
            <div className="bg-pocion2 rounded-xl m-5 p-6 w-full text-azul flex flex-col justify-start items-end text-left text-xl font-Urbanist sm:w-[50%]">

                <div className='flex justify-end mb-3'>
                    <FaWindowClose className=' text-2xl cursor-pointer' onClick={()=>setIsOpen(false)}/>
                </div>
            
                <h1 className="bg-white bg-opacity-30 pl-3 p-1 w-full ">Nombre de la poción: {potionId.name} </h1>
                <p className="bg-white bg-opacity-30 pl-3 p-1 ">Descripción de la poción: {potionId.description}</p>
                <p className="bg-white bg-opacity-30 pl-3 p-1 w-full">Precio de la poción: {potionId.price}</p>
                <p className="bg-white bg-opacity-30 pl-3 p-1 w-full">Cantidad de la poción: {potionId.quantity}</p>
                
            </div>
                
            </section>
        )}
            
        </div>
    )
}

export default ModalDetalles;