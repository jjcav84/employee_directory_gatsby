module.exports = {
  siteMetadata: {
    title: 'Gatsby Employee Directory',
    description: 'Built with React, MDbootstrap, and Gatsby',
    siteUrl: 'https://example.com',
    author: 'jacob-cavazos'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-employee-directory`,
        short_name: `Directory`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    //  {
    //   resolve: `gatsby-plugin-google-analytics`,
    // options: {
    //  trackingId: ''
    //    }
    //  }
  ]
}
