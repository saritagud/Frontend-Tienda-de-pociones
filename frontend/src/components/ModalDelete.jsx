import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

function Eliminar({potionId}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (potionId) => {
    fetch("http://localhost:3000/eliminar/" + potionId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      setIsOpen(!isOpen)
  };

 

  return (
    <div>
      <FaTrash className="text-azul text-2xl" onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30 ">
          <div className="bg-fondo text-center rounded-xl m-5 p-6 font-Urbanist w-full  flex flex-col justify-start items-center text-sm ">
            <h1 className="text-[20px]">¿Está seguro/a de eliminar esta poción?</h1>
            <div className="flex">
              <button
                className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>
                <button
                  
                  className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5"
                  onClick={() => handleDelete(potionId)}
                >
                  Eliminar
                </button>

            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Eliminar;
