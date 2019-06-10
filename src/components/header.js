// external imports
import React, { Component } from "react"
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  Animation,
} from "mdbreact"
import { Link } from "gatsby"

// import logo file
import logo from "../images/logo.png"

// React component for navbar
class Header extends Component {
  state = {
    collapseID: ``,
  }
  // function to enable hamburger button to open and close for mobile UI
  toggleCollapse = collapseID => () =>
    this.setState(prevState => {
      return {
        collapseID: prevState.collapseID !== collapseID ? collapseID : ``,
      }
    })

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        onClick={this.toggleCollapse(`navbarCollapse`)}
      />
    )
    return (
      <div id="navpage">
        <MDBNavbar color="cyan accent-3" light expand="md" fixed="top">
          <Link to="/">
            <Animation type="bounce" duration="2s">
              <img src={logo} height="65px" alt="Site Logo" />
            </Animation>
          </Link>
          <MDBNavbarToggler
            tag="button"
            className="aqua-gradient"
            onClick={this.toggleCollapse(`navbarCollapse`)}
          />
          <MDBCollapse
            id="navbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem active>
                <Link to="/directory">
                  <strong className="black-text ml-3 text-uppercase">
                    <Animation type="bounce" duration="1s">
                      <MDBBtn color="deep-purple">Directory</MDBBtn>
                    </Animation>
                  </strong>
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {this.state.collapseID && overlay}
      </div>
    )
  }
}

export default Header
