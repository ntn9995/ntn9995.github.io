import { useStaticQuery, graphql} from "gatsby"

export const usePosts = () => {
  const {allMarkdownRemark} = useStaticQuery(
      graphql`
          query {
              allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}, limit: 10, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                  node {
                    frontmatter {
                      title
                      tags
                      date(formatString: "YYYY MMMM DD")
                    }
                    fields {
                      slug
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