module.exports = {
  siteMetadata: {
    title: 'Static Single Page React App Template',
    description: 'Built with React, MDbootstrap, and Gatsby',
    siteUrl: '',
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-gatsby-template`,
        short_name: `MDBReact Template`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/icon.png'
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
