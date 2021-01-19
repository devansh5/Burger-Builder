import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
export default function BuildControls(props) {
    const controls=[
        {label:"Cheese",type:"Cheese"},
        {label:"Bacon",type:"Bacon"},
        {label:"Meat",type:"Meat"},
        {label:"Salad",type:"Salad"}
    ]
    return (
        <div className={classes.BuildControls}>
           {
               controls.map(ctrl=>{
                   return <BuildControl 
                   key={ctrl.label} 
                   label={ctrl.label} 
                   type={ctrl.type}
                   added={()=>props.ingredientsAdded(ctrl.type)}
                   removed={()=>props.ingredientsRemoved(ctrl.type)}
                   />
               })
           }
        </div>
    )
}
