// internal imports
import React from "react"

// external component imports
import Header from "./header"
import Footer from "./footer"
// import SEO from "./seo"

// React Layout component
const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
