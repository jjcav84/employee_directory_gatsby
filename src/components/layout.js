// internal imports
import React from 'react'

// external component imports
import Navbar from './navbar'
import Footer from './footer'

// React Layout component
export default ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)
