// external imports
import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// internal component imports
import Layout from '../components/layout'
import Card from '../components/card'

// for inline styling of h1 tag
const h1Style = {
  marginTop: '115px',
  marginBottom: '-15px'
}

// React index component
const IndexPage = props => {
  console.log(props)
  return (
    <Layout>
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta name="description" content={props.data.site.siteMetadata.description} />
        <meta name="keywords" content={props.data.site.siteMetadata.keywords} />
        <meta name="author" content={props.data.site.siteMetadata.author} />
        <link rel="canonical" href={props.data.site.siteMetadata.siteUrl} />
      </Helmet>
      <div style={h1Style} className="text-center pb-4">
        <h1>{props.data.site.siteMetadata.title}</h1>
      </div>
      <div className="pb-4">
        <Card />
      </div>
    </Layout>
  )
}

export default IndexPage

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
