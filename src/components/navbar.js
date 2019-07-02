import React from "react"
import NavbarContainer from "./css_modules/navbar-container.module.css"

export default () => (
    <div className={NavbarContainer.navbarContainer}>
        <div className={NavbarContainer.navLink}>
            Home
        </div>
        <div className={NavbarContainer.navLink}>
            Blog
        </div>
        <div className={NavbarContainer.navLink}>
            
        </div>
        <div className={NavbarContainer.navLink}>
            github
        </div>
        <div className={NavbarContainer.navLink}>
            linkedin
        </div>
        <div className={NavbarContainer.navLink}>
            medium
        </div>
    </div>
)