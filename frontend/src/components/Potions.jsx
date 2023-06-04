import { useState, useEffect } from "react";
import Editar from "./FormEditar";
import Eliminar from "./ModalDelete";
import ModalDetalles from "./ModalDetalles";

function Potions() {
  const [potion, setPotion] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPotions, setFilteredPotions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/potions", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(data => {
        setPotion(data);
        setFilteredPotions(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase(); // Convertir a minúsculas
    setSearchTerm(searchTerm);

    const filteredPotions = potion.filter(potion =>
      potion.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPotions(filteredPotions);
  };

  return (
    <div className="w-full flex flex-col items-center">

      <input type="text" placeholder="Buscar pociones" onChange={handleSearch} className="m-4 p-2 rounded-lg font-Urbanist" />
      {filteredPotions.map((potions) => (
        <ul className="rounded-lg bg-pocion2 p-4 m-5 text-left h-[50vh] w-[80%] font-Urbanist sm:w-[50%] sm:h-[70vh]" key={potions._id}>
          <div className="flex justify-end w-full ">
            <Editar potionId={potions._id} />
            <Eliminar potionId={potions._id} />
          </div>

          <div className="h-full flex flex-col justify-end text-azul cursor-pointer" onClick={() => { setIsOpen(!isOpen); setModal(potions) }}>
            <li className="bg-white bg-opacity-30 pl-3 p-1" key={potions._id}>{potions.name}</li>
            <li className="bg-white bg-opacity-30 pl-3 p-1" key={potions._id}>{potions.description}</li>
            <li className="mb-5 bg-white bg-opacity-30 pl-3 p-1" key={potions._id}>{potions.price}</li>
          </div>
        </ul>
      ))}
      <ModalDetalles potionId={modal} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default Potions;
