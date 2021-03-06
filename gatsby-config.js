//setup dotenv to pass environmental variables using dotenv npm package
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

// query character information for use with algolia search
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

// array with currently one index for use with algolia search mapping and returning objects in results array
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
    title: `Gatsby Employee Directory`,
    titleTemplate: `%s · Built with GraphQL`,
    description: `Rick and Morty Employee Directory built with React, MDbootstrap, Gatsby, and the Rick and Morty GraphQL API`,
    siteUrl: `https://gatsbyemployeedirectory.netlify.com`,
    author: `Jacob Cavazos`,
    keywords: `React, Bootstrap, Gatsby, Material Design, directory, Rick and Morty API, GraphQL`,
    image: `/src/images/logo.png`,
    twitterUsername: `@jcavazos84`,
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
    `gatsby-plugin-eslint`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // plugin to automatically create manifest for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-site-employee-directory`,
        short_name: `Directory`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `${__dirname}/src/images/logo.png`,
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
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    // TODO: implement google analytics tracking
    //  {
    //   resolve: `gatsby-plugin-google-analytics`,
    // options: {
    //  trackingId: ''
    //    }
    //  }
  ],
}
