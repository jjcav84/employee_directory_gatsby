// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

// card component to display employee's image and data pulled from the API
const Card = props => {
  return (
    <MDBRow className="mx-auto my-4">
      <MDBCol>
        <MDBCard style={{ width: '24rem' }}>
          <MDBCardImage src={props.src} alt={props.name} hover top />
          <MDBCardBody>
            <MDBCardTitle tag="h4" className="text-uppercase">
              {props.name}
            </MDBCardTitle>
            <MDBCardText tag="div" className="blue-gray-text">
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Status:</h5>
                <h5 className="border-bottom border-dark">{props.status}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Species:</h5>
                <h5 className="border-bottom border-dark">{props.species}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Gender:</h5>
                <h5 className="border-bottom border-dark">{props.gender}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Employee ID:</h5>
                <h5 className="border-bottom border-dark">{props.id}</h5>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  id: PropTypes.string
}

export default Card
