import React,{useState} from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Wrapped from '../../hoc/Wrapped'

const INGREDIENT_PRICES={
    Salad:0.5,
    Cheese:0.3,
    Meat:1.3,
    Bacon:0.6
}


export default function BurgerBuilder() {
    const [ingredients,setIngredients]=useState({
        Salad:0,
        Bacon:0,
        Cheese:1,
        Meat:1
    })
    const [totalPrice,setTotalPrice]=useState(4)

    const addIngredientHandler=(type)=>{
        const oldCountIngredient=ingredients[type]
        const updatedCountIngredient=oldCountIngredient+1
        const updatedIngredient={
            ...ingredients
        }
        updatedIngredient[type]=updatedCountIngredient
        const priceAddition=INGREDIENT_PRICES[type]
        const oldIngredientPrice=totalPrice
        const newIngredientPrice=oldIngredientPrice+priceAddition
        setIngredients(updatedIngredient)
        setTotalPrice(newIngredientPrice)
    }

    const removeIngredientHandler=(type)=>{
        const oldCountIngredient=ingredients[type]
        if(oldCountIngredient==0){
            return true;
        }
        else{
            const updatedCountIngredient=oldCountIngredient-1
            const updatedIngredient={
                ...ingredients
            }
            updatedIngredient[type]=updatedCountIngredient
            const priceRemoval=INGREDIENT_PRICES[type]
            const oldIngredientPrice=totalPrice
            const newIngredientPrice=oldIngredientPrice-priceRemoval
            setIngredients(updatedIngredient)
            setTotalPrice(newIngredientPrice)
        }
        

    }
    return (
        <Wrapped>
            <Burger ingredients={ingredients}/>
            <BuildControls
             ingredientsAdded={addIngredientHandler}
             ingredientsRemoved={removeIngredientHandler}
             />
        </Wrapped>
    )
}
