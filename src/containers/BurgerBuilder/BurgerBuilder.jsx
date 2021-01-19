import React,{useState} from 'react'
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
            <div>buildcontrols</div> 
            <Burger ingredients={ingredients}/>
        </Wrapped>
    )
}
