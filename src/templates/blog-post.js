import React from "react"
import Layout from "../components/layout"
import BlogPost from "../components/css_modules/blog-post.module.css"
import { graphql } from "gatsby";

export default ({ data }) => {
    
    const post = data.markdownRemark

    return (
        <Layout>
            <div className={BlogPost.postTitle}>
                <h1>{post.frontmatter.title}</h1>
                <div className={BlogPost.date}>by Ngoc Nguyen - {post.frontmatter.date}</div>
            </div>
            <div className={BlogPost.postBody}>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug} }) {
            html
            frontmatter{
                title
                date(formatString: "YYYY/MM/DD")
            }
        }
    }
`