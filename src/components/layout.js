import React from 'react'
import NavPage from './NavPage'
import FooterPage from './FooterPage'

export default ({ children }) => (
  <div>
    <NavPage />
    <FooterPage />
    {children}
  </div>
)
