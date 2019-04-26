module.exports = {
  siteMetadata: {
    title: `Clap 👏 Text 👏 Generator`,
    description: `Your 👏 text 👏 lacks 👏 claps. 👏 Let 👏 me 👏 help.`,
    author: `@delster`,
  },
  plugins: [
    // Head Tag / SEO
    `gatsby-plugin-react-helmet`,
    // Styling
    `gatsby-plugin-styled-components`,
    // PWA Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `clap-text-generator`,
        short_name: `clap-generator`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
