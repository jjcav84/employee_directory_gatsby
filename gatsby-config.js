// site metadata and gatsby plugin configuration file
module.exports = {
  // metadata for site for use with graphql
  siteMetadata: {
    title: 'Gatsby Employee Directory',
    description: 'Rick and Morty Employee Directory built with React, MDbootstrap, Gatsby, and the Rick and Morty API',
    siteUrl: 'https://gatsbyemployeedirectory.netlify.com',
    author: 'Jacob Cavazos',
    keywords: 'React, Bootstrap, Gatsby, Material Design, directory, Rick and Morty API'
  },
  plugins: [
    // plugin to create _headers file for netlify
    `gatsby-plugin-netlify`,
    // plugin to create helmet component to inject code into head html tag
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    // plugin enables automatic creation of sitemap.xml file at root/sitemap.xml
    `gatsby-plugin-sitemap`,
    // this plugin enables image processing
    `gatsby-plugin-sharp`,
    // plugin to aid with using SVG graphics
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    // plugin to automatically create manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-site-employee-directory`,
        short_name: `Directory`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/logo.png'
      }
    },
    // plugin to automaticall create robots.txt file
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // plugin to pull and use data from rick and morty graphql endpoint
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'rmAPI',
        fieldName: 'rickAndMortyAPI',
        url: 'https://rickandmortyapi.com/graphql'
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
