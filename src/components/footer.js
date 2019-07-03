import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons"
import FooterContainer from "./css_modules/footer-container.module.css"

const github = <FontAwesomeIcon icon={faGithub}/>
const linkedin = <FontAwesomeIcon icon={faLinkedin}/>
const medium = <FontAwesomeIcon icon={faMedium}/>

export default () => (
    <div>
        <div className={FooterContainer.footerContainer}>
            <div className={FooterContainer.footerLink}>
                <a href="https://github.com/ntn9995" title="github">{github}</a>
            </div>
            <div className={FooterContainer.footerLink}>
                <a href="https://www.linkedin.com/in/ngoc-nguyen-630402b9/" title="linkedin">{linkedin}</a>
            </div>
            <div className={FooterContainer.footerLink}>
                <a href="https://medium.com/@ngocnguyen9995" title="medium">{medium}</a>
            </div>
        </div>
        <div className={FooterContainer.footerIconCredit}>This page's favicon is made by 
            <a href="https://www.freepik.com/" title="Freepik"> Freepik
            </a> from 
            <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com
            </a>
        </div>
    </div>
)