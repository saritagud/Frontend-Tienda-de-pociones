import { useState } from "react";



function Ingredients(){
    const [Ingredients, setIngredients] = useState([]);

   
    fetch("http://localhost:3000/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIngredients(data);
      
      })
      .catch((error) => {
        console.error(error);
       
      });
    return(
        <div className="flex flex-col items-center mb-9 w-full ">
            {Ingredients.map((ingredient)=>(
                <section className="bg-fondo bg-cover bg-no-repeat text-base text-azul  p-3 w-[80%] mt-6 rounded-lg  text-left font-Urbanist md:text-xl lg:text-2xl" key={ingredient.id}>
                    <div className="h-full flex flex-col justify-end">
                        <p className="p-2 bg-white bg-opacity-30" key={ingredient.id}>{ingredient.name}</p>
                        <p className="p-2 bg-white bg-opacity-30" key={ingredient.id}>{ingredient.description}</p>
                        <p className="p-2 bg-white bg-opacity-30" key={ingredient.id}>{ingredient.quantity}</p>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Ingredients;