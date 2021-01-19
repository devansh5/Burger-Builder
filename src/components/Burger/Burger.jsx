import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
export default function Burger(props) {
  let transformIngre = Object.keys(props.ingredients)
  .map((ig) => {
   return  [...Array(props.ingredients[ig])].map((_, i) => {
      return <BurgerIngredient key={ig + i} type={ig} />
    })
  }).reduce((arr,ele)=>{
      return arr.concat(ele)
  },[])
  if(transformIngre.length === 0){
    transformIngre=<p>Please Start adding ingredients</p>

  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngre}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
