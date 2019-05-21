import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import EmployeeCard from '../components/EmployeeCard'

const h1Style = {
  marginTop: '135px',
  marginBottom: '-15px'
}

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content="Static single page web app directory site built with React, MDBootstrap, and Gatsby"
      />
      <meta name="keywords" content="React, Bootstrap, Gatsby, Material Design, directory" />
      <meta name="author" content="Jacob Cavazos" />
      <link rel="canonical" href="" />
    </Helmet>
    <div style={h1Style} className="text-center pb-4">
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
    <div className="pb-4">
      <EmployeeCard />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
