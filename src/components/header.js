import React from "react"
import headerStyle from "./css_modules/header-container.module.css"

export default ({children}) => (
    <div className= {headerStyle.container}>{children}</div>
)