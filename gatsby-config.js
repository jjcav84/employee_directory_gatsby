require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const characterQuery = `{
  rickAndMortyAPI {
    characters {
      results {
        objectID: id
        id
        name
        image
        gender
        species
        status
      }
    }
  }
}`

const queries = [
  {
    query: characterQuery,
    transformer: ({ data }) =>
      data.rickAndMortyAPI.characters.results.map(({ ...rest }) => {
        return {
          ...rest,
        }
      }),
  },
]

// site metadata and gatsby plugin configuration file
module.exports = {
  // metadata for site for use with graphql
  siteMetadata: {
    title: `GatsbyJS Employee Directory`,
    description: `Rick and Morty Employee Directory built with React, MDbootstrap, Gatsby, and the Rick and Morty API`,
    siteUrl: `https://gatsbyemployeedirectory.netlify.com`,
    author: `Jacob Cavazos`,
    keywords: `React, Bootstrap, Gatsby, Material Design, directory, Rick and Morty API`,
  },
  plugins: [
    // algolia plugin for search
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    // plugin to create _headers file for netlify
    `gatsby-plugin-netlify`,
    // plugin to create helmet component to inject code into head html tag
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    // plugin enables automatic creation of sitemap.xml file at root/sitemap.xml
    `gatsby-plugin-sitemap`,
    // this plugin enables image processing
    `gatsby-plugin-sharp`,
    // plugin to aid with using SVG graphics
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
    // plugin to automatically create manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-site-employee-directory`,
        short_name: `Directory`,
        start_url: `/`,
        display: `standalone`,
      },
    },
    // plugin to automaticall create robots.txt file
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.example.com`,
        sitemap: `https://www.example.com/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    // plugin to pull and use data from rick and morty graphql endpoint
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `rmAPI`,
        fieldName: `rickAndMortyAPI`,
        url: `https://rickandmortyapi.com/graphql`,
      },
    },
    //  {
    //   resolve: `gatsby-plugin-google-analytics`,
    // options: {
    //  trackingId: ''
    //    }
    //  }
  ],
}
