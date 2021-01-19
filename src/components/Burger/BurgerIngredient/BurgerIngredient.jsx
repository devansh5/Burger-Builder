import React from "react";
import classes from './BurgerIngredient.module.css';
import PropTypes from "prop-types";
function BurgerIngredient(props) {
  let ingredient = null;
  switch(props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "Meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "Bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "Salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "Cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
  }
  return ingredient;
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
