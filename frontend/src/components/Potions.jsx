import { useState} from "react";
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
        <div className="w-full flex flex-col items-center">
            
            {potion.map((potions)=>(
                
                <ul className="rounded-lg bg-pocion2 p-4 m-5 text-left h-[50vh] w-[80%]" key={potions._id}>
                    <div className="flex justify-end w-full ">
                        <Editar potionId={potions._id} />
                        <Eliminar potionId={potions._id}/>
                    </div>
                    
                    <div className="h-full flex flex-col justify-end text-azul ">
                        <li className=" bg-white bg-opacity-30 pl-3 p-1"  key={potions._id}>{potions.name}</li>
                        <li className="bg-white bg-opacity-30 pl-3 p-1" key={potions._id}>{potions.description}</li>
                        <li className="mb-5 bg-white bg-opacity-30 pl-3 p-1" key={potions._id}>{potions.price}</li>
                    </div>
                </ul>
            ))}
        </div>
    )
}

export default Potions;