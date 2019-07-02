import React from "react"
import headerStyle from "./css_modules/header.module.css"

export default ({children}) => (
    <div className= {headerStyle.header}>{children}</div>
)