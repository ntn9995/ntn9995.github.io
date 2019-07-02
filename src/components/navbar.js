import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "gatsby"
import {faHome, faBookOpen} from "@fortawesome/free-solid-svg-icons"
import NavbarContainer from "./css_modules/navbar-container.module.css"

const home = <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
const blog = <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>

export default () => (
    <div className={NavbarContainer.navbarContainer}>
        <div className={NavbarContainer.header} title="Totally static and professional logo here">
        ̿̿(づ￣ ³￣)づ ~(˘▾˘~)
        </div>
        <div className={NavbarContainer.navLink}>
        </div>
        <div className={NavbarContainer.navLink}>
            <Link to="/" title="homepage">{home}</Link>
        </div>
        <div className={NavbarContainer.navLink}>
            <Link to="/posts/" title="blog">{blog}</Link>
        </div>
    </div>
)