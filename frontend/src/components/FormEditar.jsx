import { useState, useEffect } from "react";
import {FaWindowClose, FaPencilAlt} from 'react-icons/fa'

function Editar() {
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Quantify, setQuantify] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ingredients", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then(data => {
      setIngredients(data);
    });
  }, []);

  const handleIngredientChange = (event, ingredientId) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === ingredientId) {
        return {
          ...ingredient,
        };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const submit = (event) => {
    event.preventDefault();
  
    const selectedIngredients = ingredients.filter(
      (ingredient) => ingredient.checked
    );
    const ingredientIds = selectedIngredients.map((ingredient) => ingredient.id);

    const datosPotion = {
      name: Name,
      description: Description,
      price: Price,
      quantify: Quantify,
      ingredients: ingredientIds,
    };

    fetch("http://localhost:3000/editar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPotion),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  
  
  return (
    <div>
      <FaPencilAlt className="text-azul text-2xl" onClick={() => setIsOpen(!isOpen)}/>

      {isOpen && (
        
        <form className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30 "  onSubmit={submit}>
        <FaWindowClose onClick={() => setIsOpen(!isOpen)} className="absolute top-16 text-2xl left-36 w-full"/>
            <div className="bg-fondo rounded-xl m-5 p-6 font-Urbanist w-full text-azul  flex flex-col justify-start items-center text-sm text-[15px]">
            <label className="w-full text-left mb-1">Nombre de la poción</label>
          <input className="rounded-lg p-2 font-normal text-[15px] w-full"
            onChange={(e) => setName(e.target.value.trim())}
            value={Name}
            type="text"
          />

          <div  className="mt-3 mb-3 bg-azul text-white  rounded-lg w-full" >
            {ingredients.map((ingredient) => (
              <ul key={ingredient.id}>
                <li className="w-full text-left flex justify-between   p-3" key={ingredient.id}>
                  {ingredient.name}
                  <input className="w-5"
                    key={ingredient.id}
                    checked={ingredient.checked}
                    id={ingredient.id}
                    type="checkbox"
                    onChange={(e) => handleIngredientChange(e, ingredient.id)}
                  />
                </li>
              </ul>
            ))}
          </div>

          <label className="w-full text-left mb-1">Descripción</label>
          <input className="rounded-lg p-2 font-normal text-[15px] w-full"
            onChange={(e) => setDescription(e.target.value.trim())}
            value={Description}
            type="text"
          />
          <label className="w-full text-left mb-1">Precio</label>
          <input className="rounded-lg p-2 font-normal text-[15px] w-full"
            onChange={(e) => setPrice(e.target.value.trim())}
            value={Price}
            type="number"
            id="numero"
            name="numero"
          />
          <label className="w-full text-left mb-1">Cantidad</label>
          <input className="rounded-lg p-2 font-normal text-[15px] w-full"
            onChange={(e) => setQuantify(e.target.value.trim())}
            value={Quantify}
            type="number"
            id="numero"
            name="numero"
          />

          <button className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5">Guardar</button>
            </div>
        </form>
      )}
    </div>
  );
}

export default Editar
