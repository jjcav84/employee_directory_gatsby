import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import EmployeeCard from '../components/EmployeeCard'

const h1Style = {
  marginTop: '135px',
  marginBottom: '-15px'
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
    <div style={h1Style} className="text-center pb-4">
      <h1>Employee Directory</h1>
    </div>
    <div className="pb-4">
      <EmployeeCard />
    </div>
    <div>
      <EmployeeCard />
    </div>
  </Layout>
)

export default IndexPage
