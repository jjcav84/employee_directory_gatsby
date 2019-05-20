import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

class FooterPage extends React.Component {
  render () {
    return (
      <MDBFooter
        color="blue darken-1"
        className="page-footer font-small pt-1 mt-4"
      >
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="4" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>yourdomainname.com</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '165px' }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nulla at velit varius finibus. Pellentesque porttitor faucibus felis, quis aliquet odio mattis vitae. Donec at convallis nisi. Vestibulum nec sagittis quam.
              </p>
            </MDBCol>
            <MDBCol md="2" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>My Links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '85px' }}
              />
              <p>
                <a href="https://linkedin.com">
                  My LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com">My Github</a>
              </p>
              <p>
                <a href="https://twitter.com">My Twitter</a>
              </p>
            </MDBCol>
            <MDBCol md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '108px' }}
              />
              <p>
                <a href="https://mdbootstrap.com/material-design-for-bootstrap/?utm_ref_id=38136">
                  Material Design for Bootstrap
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" className="mb-4">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="teal accent-1 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '73px' }}
              />
              <p>
                <i className="fa fa-envelope mr-3" />
                <a href="mailto:admin@yourdomainname.com">admin@yourdomainname.com</a>
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> +1 (210) 123-590
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            <p>&copy; {new Date().getFullYear()} Copyright: Jacob Cavazos</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
  }
}

export default FooterPage
