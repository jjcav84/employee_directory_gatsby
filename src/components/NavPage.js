import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, Animation } from 'mdbreact'
import { Link } from 'gatsby'
import src1 from '../images/LogoTransparent.png'

class NavPage extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))

  render () {
    const overlay = <div id="sidenav-overlay" onClick={this.toggleCollapse('navbarCollapse')} />
    return (
      <div id="navpage">
        <MDBNavbar color="teal accent-2" light expand="md" fixed="top">
          <Link to="/">
            <Animation type="bounce" duration="2s">
              <img src={src1} type="image/png" height="100" alt="" waves />
            </Animation>
          </Link>
          <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse')} />
          <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left />
          </MDBCollapse>
        </MDBNavbar>
        {this.state.collapseID && overlay}
      </div>
    )
  }
}

export default NavPage
