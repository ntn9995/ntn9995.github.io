import React from "react"
import Layout from "../components/layout"
import { usePosts } from "../hooks/use-posts"
import BlogListStyle from "../components/css_modules/blog-list.module.css"

export default () => {
    
    const {edges} = usePosts()
    return (
        <Layout>
            <div className={BlogListStyle.blogStyle}>
                <h1>Journal</h1>
                {edges.map(({node}) => (
                    <div key={node.id}>
                        <div className={BlogListStyle.blogList}>
                            <div className={BlogListStyle.metadata}>
                                <h3>{node.frontmatter.title}</h3>
                            </div>
                            <div className={BlogListStyle.metadata}>
                                <div className={BlogListStyle.tag}>{node.frontmatter.tags[0]}</div>
                            </div>
                            <div className={BlogListStyle.metadata}>
                                <div className={BlogListStyle.date}>{node.frontmatter.date}</div>
                            </div>
                        </div>
                        <p>
                            {node.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}