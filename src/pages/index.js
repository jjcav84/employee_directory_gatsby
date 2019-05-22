import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import EmployeeCard from '../components/EmployeeCard'

const h1Style = {
  marginTop: '115px',
  marginBottom: '-15px'
}

const IndexPage = props => {
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
        <EmployeeCard />
      </div>
    </Layout>
  )
}
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

export default IndexPage
