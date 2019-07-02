import { useStaticQuery, graphql} from "gatsby"

export const usePosts = () => {
    const {allMarkdownRemark} = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
                  edges {
                    node {
                      frontmatter {
                        title
                        tags
                        date(formatString: "YYYY MMMM DD")
                      }
                      excerpt(format: MARKDOWN)
                      id
                    }
                  }
                }
              }
        `
    )
    return allMarkdownRemark
}