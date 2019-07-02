import React from "react"
import MasterContainer from "./css_modules/master-container.module.css"
import Header from "../components/header"
import BodyContainer from "../components/body-container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default ({children}) => (
    <div className= {MasterContainer.container}>
        <Header>
            <Navbar/>
        </Header>
        <BodyContainer>{children}</BodyContainer>
        <Footer/>
    </div>
)