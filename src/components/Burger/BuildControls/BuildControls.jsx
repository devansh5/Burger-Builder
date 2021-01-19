import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";
export default function BuildControls(props) {
  const controls = [
    { label: "Cheese", type: "Cheese" },
    { label: "Potato", type: "Potato" },
    { label: "Tofu", type: "Tofu" },
    { label: "Salad", type: "Salad" },
  ];
  console.log(props.purchable)
  return (
    <div className={classes.BuildControls}>
        <p>Total Price: {props.totalprice}</p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      
        <div className={classes.OrderButton} disabled={!props.purchable}>ORDER NOW</div>

    </div>
  );
}
