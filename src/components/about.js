import React from "react"
import AboutStyle from "./css_modules/index-about.module.css"
import "./about.css"

export default ({children}) => (
    <div className= {AboutStyle.about}>{children}</div>
)