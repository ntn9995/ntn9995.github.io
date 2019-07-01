import React from "react"
import MasterContainer from "./css_modules/master-container.module.css"

export default ({children}) => (
    <div className= {MasterContainer.container}>{children}</div>
)