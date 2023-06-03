import { useState, useEffect } from "react";

function Modal() {
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
          checked: event.target.checked
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
  };
  
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Crear Poción</button>

      {isOpen && (
        <form onSubmit={submit}>
          <label>Nombre de la poción</label>
          <input
            onChange={(e) => setName(e.target.value.trim())}
            value={Name}
            type="text"
          />

          <div>
            {ingredients.map((ingredient) => (
              <ul key={ingredient.id}>
                <li key={ingredient.id}>
                  {ingredient.name}
                  <input
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

          <label>Descripción</label>
          <input
            onChange={(e) => setDescription(e.target.value.trim())}
            value={Description}
            type="text"
          />
          <label>Precio</label>
          <input
            onChange={(e) => setPrice(e.target.value.trim())}
            value={Price}
            type="number"
            id="numero"
            name="numero"
          />
          <label>Cantidad</label>
          <input
            onChange={(e) => setQuantify(e.target.value.trim())}
            value={Quantify}
            type="number"
            id="numero"
            name="numero"
          />

          <button>Crear poción</button>
        </form>
      )}
    </div>
  );
}

export default Modal
