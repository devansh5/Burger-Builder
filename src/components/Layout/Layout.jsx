import React from 'react'
import Wrapped from '../../hoc/Wrapped'
import classes from './Layout.module.css'
export default function Layout(props) {
    return (
        <Wrapped>
            <div className={classes.box}>SideDrawer,ToolBar,Backdrop</div>
            <main>{props.children}</main>
        </Wrapped>
    )
}
