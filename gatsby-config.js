/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ngoc Nguyen's personal site"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "contents",
        path: `${__dirname}/contents/`
      }
    },
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]  
      }
    },
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name: `NgocNguyen`,
        short_name: `Ngoc`,
        start_url: `/`,
        background_color: `#403f47`,
        theme_color: `#403f47`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ]
}
