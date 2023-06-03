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
        <div>
            {Ingredients.map((ingredient)=>(
                <section key={ingredient.id}>
                    <p key={ingredient.id}>{ingredient.name}</p>
                    <p key={ingredient.id}>{ingredient.description}</p>
                    <p key={ingredient.id}>{ingredient.quantify}</p>
                </section>
            ))}
        </div>
    )
}

export default Ingredients;