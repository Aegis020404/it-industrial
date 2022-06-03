import React from "react";
import cl from './MyNavLink.module.css';

const MyNavLink = ({children,classes, ...props})=>{
    return (
        <a {...props} className={[cl.myLink, classes].join` `} >{children}</a>
    )
}

export default MyNavLink