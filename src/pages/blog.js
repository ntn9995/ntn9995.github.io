import React from "react"
import Layout from "../components/layout"
import { usePosts } from "../hooks/use-posts"
import { Link } from "gatsby"
import BlogListStyle from "../components/css_modules/blog-list.module.css"

export default () => {
    
    const {edges} = usePosts()
    return (
        <Layout>
            <div className={BlogListStyle.blogStyle}>
                <h1>Posts</h1>
                {edges.map(({node}) => (
                    <div key={node.id}>
                            <div className={BlogListStyle.blogList}>
                                <div className={BlogListStyle.metadata}>
                                    <Link to={node.fields.slug}>
                                        <h3>{node.frontmatter.title}</h3>
                                    </Link>
                                </div>
                                <div className={BlogListStyle.metadata}>
                                    <div className={BlogListStyle.tag}>{node.frontmatter.tags[0]}</div>
                                </div>
                                <div className={BlogListStyle.metadata}>
                                    <div className={BlogListStyle.date}>{node.frontmatter.date}</div>
                                </div>
                            </div>
                        
                        <div className={BlogListStyle.excerpt}>
                            <p>
                                {node.excerpt}
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </Layout>
    )
}