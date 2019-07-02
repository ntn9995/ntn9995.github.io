import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "gatsby"
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons"
import {faHome, faBookOpen} from "@fortawesome/free-solid-svg-icons"
import NavbarContainer from "./css_modules/navbar-container.module.css"

const github = <FontAwesomeIcon icon={faGithub}/>
const linkedin = <FontAwesomeIcon icon={faLinkedin}/>
const medium = <FontAwesomeIcon icon={faMedium}/>
const home = <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
const blog = <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>

export default () => (
    <div className={NavbarContainer.navbarContainer}>
        <div className={NavbarContainer.navLink}>
            <Link to="/">{home}</Link>
        </div>
        <div className={NavbarContainer.navLink}>
            <Link to="/posts/">{blog}</Link>
        </div>
        <div className={NavbarContainer.navLink}>
            
        </div>
        <div className={NavbarContainer.navLink}>
            <a href="https://github.com/ntn9995" title="github">{github}</a>
        </div>
        <div className={NavbarContainer.navLink}>
            <a href="https://www.linkedin.com/in/ngoc-nguyen-630402b9/" title="linkedin">{linkedin}</a>
        </div>
        <div className={NavbarContainer.navLink}>
            <a href="https://medium.com/@ngocnguyen9995" title="medium">{medium}</a>
        </div>
    </div>
)