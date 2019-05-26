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
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

import ImagePreview from "./image-preview"

const searchClient = algoliasearch(
  `ZN34FVCACI`,
  `ad5f24f5113b88a37f5ef59f885599ff`
)

// variable for styling of icon for logo
const iconStyle = {
  textShadow: `rgb(21, 95, 160) 0px 0px 0px, rgb(22, 99, 167) 1px 1px 0px, rgb(23, 103, 174) 2px 2px 0px, rgb(24, 107, 181) 3px 3px 0px, rgb(25, 112, 188) 4px 4px 0px, rgb(26, 116, 195) 5px 5px 0px, rgb(26, 120, 202) 6px 6px 0px, rgb(27, 124, 208) 7px 7px 0px, rgb(28, 128, 215) 8px 8px 0px, rgb(29, 132, 222) 9px 9px 0px`,
  fontSize: `45px`,
  color: `rgb(255, 255, 255)`,
  height: `80px`,
  width: `80px`,
  lineHeight: `80px`,
  borderRadius: `0%`,
  textAlign: `center`,
  backgroundColor: `rgb(30, 136, 229)`,
}

// React component for navbar
class Header extends Component {
  state = {
    activeItem: `1`,
    collapseID: ``,
  }

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
              <i id="icon" className="fa fa-users" style={iconStyle} />
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
            <MDBNavbarNav right>
              <MDBNavItem>
                <InstantSearch
                  searchClient={searchClient}
                  indexName="Directory"
                >
                  <SearchBox />
                  <Hits hitComponent={ImagePreview} />
                </InstantSearch>
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
