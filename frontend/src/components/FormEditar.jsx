import { useState } from "react";
import { FaWindowClose, FaPencilAlt } from "react-icons/fa";

function Editar({ potionId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [potionData, setPotionData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ingredientID, setingredientID ] = useState([])

 
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

      const ingredientSelected = (idsIngredient) => {
        setingredientID([...ingredientID, idsIngredient])
      }
  const submit = (event) => {
    event.preventDefault();

    const datosPotion = {
      id: potionId, // Incluir el ID de la poción a editar
      name: potionData.name,
      description: potionData.description,
      price: potionData.price,
      quantify: potionData.quantity,
      ingredients: ingredientID,
    };


    fetch("http://localhost:3000/editar/" + potionId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPotion),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <FaPencilAlt
        className="text-azul text-2xl mr-2"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30"
          onSubmit={submit}
        >
          <FaWindowClose
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-10 text-2xl left-36 w-full"
          />
          <div className="bg-fondo rounded-xl m-5 p-6 font-Urbanist w-full text-azul flex flex-col justify-start items-center text-sm text-[15px]">
            <label className="w-full text-left mb-1">Nombre de la poción</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) =>
                setPotionData({ ...potionData, name: e.target.value.trim() })
              }
              value={potionData.name}
              type="text"
            />

            <ul className="mt-3 mb-3 bg-azul text-white  rounded-lg w-full">
                {ingredients.map((ingredient) => (
                  <li
                    className="w-full text-left flex justify-between p-3"
                    key={ingredient.id}
                  >
                    <label htmlFor={ingredient.name}>{ingredient.name}</label>
                    <input
                      className="w-5"
                      key={ingredient.id}
                      checked={ingredient.checked}
                      id={ingredient.name}
                      value={ingredient.name}
                      type="checkbox"
                      onClick={() => ingredientSelected(ingredient._id)}
                    />
                  </li>
                ))}
              </ul>

            <label className="w-full text-left mb-1">Descripción</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) =>
                setPotionData({
                  ...potionData,
                  description: e.target.value.trim(),
                })
              }
              value={potionData.description}
              type="text"
            />
            <label className="w-full text-left mb-1">Precio</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) =>
                setPotionData({ ...potionData, price: e.target.value.trim() })
              }
              value={potionData.price}
              type="number"
              id="numero"
              name="numero"
            />
            <label className="w-full text-left mb-1">Cantidad</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) =>
                setPotionData({
                  ...potionData,
                  quantity: e.target.value.trim(),
                })
              }
              value={potionData.quantity}
              type="number"
              id="numero"
              name="numero"
            />

            <button className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5">
              Guardar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Editar;
