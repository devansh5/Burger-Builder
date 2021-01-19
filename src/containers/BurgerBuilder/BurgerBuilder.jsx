import React,{useState} from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Wrapped from '../../hoc/Wrapped'
export default function BurgerBuilder() {
    const [ingredients,setIngredients]=useState({
        Salad:0,
        Bacon:0,
        Cheese:1,
        Meat:1
    })
    return (
        <Wrapped>
            <Burger ingredients={ingredients}/>
            <BuildControls/>
        </Wrapped>
    )
}
