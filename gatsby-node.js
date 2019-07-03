const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const {createNodeField} = actions
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }    
    `).then(res => {
        console.log(JSON.stringify(res, null, 4))
    }).error(
        console.log(error)
    )
}