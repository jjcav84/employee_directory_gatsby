import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const divStyle = {
  marginTop: '130px'
}

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>MDBootstrap React Template</title>
      <meta
        name="description"
        content="Static single page web app template built with React, MDBootstrap, and Gatsby"
      />
      <meta name="keywords" content="React, Bootstrap, Gatsby, Material Design, Template" />
      <meta name="author" content="Jacob Cavazos" />
      <link rel="canonical" href="" />
    </Helmet>
    <div style={divStyle}>
      <h1>Employee Directory</h1>
    </div>
  </Layout>
)

export default IndexPage
