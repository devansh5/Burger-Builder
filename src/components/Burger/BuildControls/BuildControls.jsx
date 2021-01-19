import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'
export default function BuildControls(props) {
    const controls=[
        {label:"Cheese",type:"cheese"},
        {label:"Bacon",type:"bacon"},
        {label:"Meat",type:"meat"},
        {label:"Salad",type:"salad"}
    ]
    return (
        <div className={classes.BuildControls}>
           {
               controls.map(ctrl=>{
                   return <BuildControl key={ctrl.label} label={ctrl.label} />
               })
           }
        </div>
    )
}
