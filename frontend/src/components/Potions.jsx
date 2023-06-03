import { useState } from "react";
import Editar from "./FormEditar";
import Eliminar from "./ModalDelete";


function Potions(){

    const [potion, setPotion] = useState([]);
    
    fetch("http://localhost:3000/potions",{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then(data => {
        setPotion(data);
    })
    .catch((error) => {
        console.error(error);
    });
    return(
        <div>
            <Editar/>
            <Eliminar/>
            {potion.map((potions)=>(
                <ul className="rounded-lg" key={potions.id}>
                    <li key={potions.id}>{potions.name}</li>
                    <li key={potions.id}>{potions.description}</li>
                    <li key={potions.id}>{potions.price}</li>
                </ul>
            ))}        
        </div>
    )
}

export default Potions;