import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputIngredient, setInputIngredient] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [mutiblePrice, setMutiblePrice] = useState("");
  const [menu, setMenu] = useState([]);
  // const [dishPrice, setDishPrice] = useState(menu.price);

  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const inputIngredientHandler = (e) => {
    setInputIngredient(e.target.value);
  };
  const inputPriceHandler = (e) => {
    setInputPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setMenu([
      ...menu,
      {
        dish: inputName,
        ingredients: inputIngredient,
        price: inputPrice,
        mutiblePrice: inputPrice,
        id: Math.random() * 1000,
      },
    ]);

    setInputName("");
    setInputIngredient("");
    setInputPrice("");
    console.log(typeof menu[0].price);
  };

  const priceChange = (e, id) => {
    let store = menu.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          mutiblePrice: (Number(item.price) * Number(e.target.value)).toString(),
        };
      }
      return item;
    });
    return setMenu(store);
  };

  return (
    <div className="App">
      <div className="welcome-box">
        <h2>Welcome to kwaBrenda</h2>
        <p>Top South African Food</p>
      </div>

      <div className="form-box">
        <label>
          Dish:
          <input
            type={"text"}
            onChange={inputNameHandler}
            className="name"
            value={inputName}
          />
        </label>
        <label>
          Ingredients:
          <input
            type={"text"}
            onChange={inputIngredientHandler}
            className="ingredient"
            value={inputIngredient}
          />
        </label>
        <label>
          Price:
          <input
            type={"number"}
            onChange={inputPriceHandler}
            className="price"
            value={inputPrice}
          />
        </label>
        <button type="submit" onClick={submitHandler}>
          Add Food
        </button>
      </div>

      <div className="display-area">
        <h3>Menu</h3>
        {menu.map((food, i) => (
          <div className="food" key={food.id}>
            <h4>{food.dish}</h4>
            <h5>{food.ingredients}</h5>
            <h6>{food.mutiblePrice}</h6>
            <label>
              How much would you like?
              <input
                type={"number"}
                onChange={(e) => priceChange(e, food.id)}
                placeholder={1}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
