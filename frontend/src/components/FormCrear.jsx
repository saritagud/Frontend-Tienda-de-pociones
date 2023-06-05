import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientID, setingredientID] = useState([]);

  fetch("http://localhost:3000/ingredients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setIngredients(data);
    });

  const ingredientSelected = (idsIngredient) => {
    setingredientID([...ingredientID, idsIngredient]);
  };

  const submit = (event) => {
    event.preventDefault();

    if (event) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Haz creado tu poción!",
        showConfirmButton: true,
        timer: 4000,
      });
    }

    const regexLength = 5;
    if (Name.length < regexLength || Description.length < regexLength) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Ingrese los datos correctamente",
        showConfirmButton: true,
        timer: 4000,
      }).then(() => {
        const regexDatos = /^[a-zA-Z0]+$/;
        if (
          !Name ||
          (!regexDatos.test(Name) && !Description) ||
          !regexDatos.test(Description)
        ) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title:
              "Por favor ingresa un nombre y una descripción para tu poción",
            showConfirmButton: true,
            timer: 4000,
          });
          return;
        }
      });
    } else {
      const datosPotion = {
        name: Name,
        description: Description,
        price: Price,
        quantity: Quantity,
        ingredients: ingredientID,
      };

      fetch("http://localhost:3000/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosPotion),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div>
      <button
        className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold m-5 cursor-pointer sm:text-2xl lg:text-4xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        Crear Poción
      </button>

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm  bg-black bg-opacity-30 "
          onSubmit={submit}
        >
          <div className="bg-fondo bg-cover bg-no-repeat rounded-xl m-5 p-6 font-Urbanist w-full text-azul  flex flex-col justify-start items-center text-sm text-[15px] sm:w-[80%] sm:text-[20px] lg:w-[60%] lg:text-[25px]">
            <div className="flex justify-end mb-3 w-full sm:mb-0">
              <FaWindowClose
                className=" text-2xl cursor-pointer lg:text-4xl"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <label className="w-full text-left mb-1">Nombre de la poción</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) => setName(e.target.value.trim())}
              value={Name}
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

            <label className="w-full text-left mb-1 ">Descripción</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) => setDescription(e.target.value.trim())}
              value={Description}
              type="text"
            />
            <label className="w-full text-left mb-1 mt-2">Precio</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) => setPrice(e.target.value.trim())}
              value={Price}
              type="number"
              id="numero"
              name="numero"
            />
            <label className="w-full text-left mb-1 mt-2">Cantidad</label>
            <input
              className="rounded-lg p-2 font-normal text-[15px] w-full"
              onChange={(e) => setQuantity(e.target.value.trim())}
              value={Quantity}
              type="number"
              id="numero"
              name="numero"
            />

            <button className="bg-azul p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5">
              Crear poción
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Modal;
