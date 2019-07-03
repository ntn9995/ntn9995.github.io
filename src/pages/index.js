import React from "react"
import {graphql} from "gatsby"
import About from "../components/about"
import Layout from "../components/layout"

export default ({data}) => {
    return (
        <Layout>
            <About>
                <div className="about">
                    {data.allMarkdownRemark.edges.map(({node}) => (
                        <div key ={node.id} dangerouslySetInnerHTML={{__html: node.html}}/>
                    ))}   
                </div>
            </About>
        </Layout>
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
