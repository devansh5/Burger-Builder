import React, { useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import Wrapped from "../../hoc/Wrapped";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
const INGREDIENT_PRICES = {
  Salad: 3,
  Cheese: 5,
  Tofu: 6,
  Potato: 7,
};

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    Salad: 0,
    Potato: 0,
    Cheese: 0,
    Tofu: 0,
  });
  const [totalPrice, setTotalPrice] = useState(10);
  const [purchable, setPurchable] = useState(false);

  const purchableIngredientHandle = (ingredients) => {
    const ingredientnow = { ...ingredients };
    const sum = Object.keys(ingredientnow)
      .map((key) => {
        return ingredientnow[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchable(sum > 0);
  };
  console.log(purchable);
  const addIngredientHandler = (type) => {
    const oldCountIngredient = ingredients[type];
    const updatedCountIngredient = oldCountIngredient + 1;
    const updatedIngredient = {
      ...ingredients,
    };
    updatedIngredient[type] = updatedCountIngredient;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldIngredientPrice = totalPrice;
    const newIngredientPrice = oldIngredientPrice + priceAddition;
    setIngredients(updatedIngredient);
    setTotalPrice(newIngredientPrice);
    purchableIngredientHandle(updatedIngredient);
  };

  const removeIngredientHandler = (type) => {
    const oldCountIngredient = ingredients[type];
    if (oldCountIngredient === 0) {
      return true;
    } else {
      const updatedCountIngredient = oldCountIngredient - 1;
      const updatedIngredient = {
        ...ingredients,
      };
      updatedIngredient[type] = updatedCountIngredient;
      const priceRemoval = INGREDIENT_PRICES[type];
      const oldIngredientPrice = totalPrice;
      const newIngredientPrice = oldIngredientPrice - priceRemoval;
      setIngredients(updatedIngredient);
      setTotalPrice(newIngredientPrice);
      purchableIngredientHandle(updatedIngredient);
    }
  };

  let disabledIngredients = { ...ingredients };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <Wrapped>
      <Modal>
        <OrderSummary ingredients={ingredients} />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientsAdded={addIngredientHandler}
        ingredientsRemoved={removeIngredientHandler}
        disabled={disabledIngredients}
        totalprice={totalPrice}
        purchable={purchable}
      />
    </Wrapped>
  );
}
