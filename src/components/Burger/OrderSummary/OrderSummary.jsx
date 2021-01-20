import React from "react";
import Wrapped from "../../../hoc/Wrapped";

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>:{props.ingredients[igKey]}
      </li>
    )
  });

  return (
      <Wrapped>
        <h3>Your Order</h3>
        <p>Your Order Summary</p>
        <p>Ingrdients</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Checkout</p>
      </Wrapped>
  );
}
