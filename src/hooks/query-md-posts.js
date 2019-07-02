import { useStaticQuery, graphql} from "gatsby"

export const queryAllPostsSummary = () => {
    const { data } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        tags
                        date
                      }
                      excerpt
                      id
                    }
                  }
                }
              }
        `
    )

    return data
}