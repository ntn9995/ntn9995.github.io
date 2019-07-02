import React from "react"
import BodyContainer from "./css_modules/body-container.module.css"

export default ({children}) => (
    <div className= {BodyContainer.header}>{children}</div>
)