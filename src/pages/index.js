import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

// internal component imports
import Layout from "../components/layout"

// for inline styling of h1 tag
const h1Style = {
  marginTop: `150px`,
  marginBottom: `-15px`,
}

const searchClient = algoliasearch(
  `ZN34FVCACI`,
  `ad5f24f5113b88a37f5ef59f885599ff`
)

// React directory component
const DirectoryPage = props => (
  <Layout>
    <Helmet>
      <title>{props.data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content={props.data.site.siteMetadata.description}
      />
      <meta name="keywords" content={props.data.site.siteMetadata.keywords} />
      <meta name="author" content={props.data.site.siteMetadata.author} />
      <link rel="canonical" href={props.data.site.siteMetadata.siteUrl} />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"
        integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8="
        crossOrigin="anonymous"
      />
    </Helmet>
    <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
      <SearchBox />
      <Hits />
    </InstantSearch>
    <div style={h1Style} className="text-center pb-4">
      <h1 className="display-3 deep-purple-text">
        Welcome to the Rick and Morty themed{` `}
        {props.data.site.siteMetadata.title}
      </h1>
    </div>
  </Layout>
)

export default DirectoryPage

// graphql query to site metadata in gatsby-config.js file
// graphql query to rick and morty api data from all characters
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        keywords
      }
    }
    rickAndMortyAPI {
      characters {
        results {
          id
          name
          image
          status
          species
          gender
        }
      }
    }
  }
`
