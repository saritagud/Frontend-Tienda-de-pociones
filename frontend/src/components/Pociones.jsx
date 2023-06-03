import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";


function Pociones(){

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
            <FaPencilAlt/>
            {potion.map((potions)=>(
                <ul key={potions.id}>
                    <li key={potions.id}>{potions.name}</li>
                    <li key={potions.id}>{potions.description}</li>
                    <li key={potions.id}>{potions.price}</li>
                </ul>
            ))}
            <FaTrash/>         
        </div>
    )
}

export default Pociones;