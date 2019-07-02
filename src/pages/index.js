import React from "react"
import {graphql} from "gatsby"
import About from "../components/about"
import Header from "../components/header"
import MasterContainer from "../components/master-container"
import BodyContainer from "../components/body-container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default ({data}) => {

    return (
        <MasterContainer>
            <Header>
                <Navbar/>
            </Header>
            <BodyContainer>
                <About>
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <div key ={node.id} dangerouslySetInnerHTML={{__html: node.html}}/>
                    ))}    
                </About>
            </BodyContainer>
            <Footer/>
        </MasterContainer>
    )
}

export const query = graphql `
    query {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "Hello"}}}) {
          edges {
            node {
                id
                html
                excerpt
            }
            
          }
        }
      }
`
