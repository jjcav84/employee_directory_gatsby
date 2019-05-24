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
            <MDBCardTitle tag="h5" className="text-uppercase">
              {props.name}
            </MDBCardTitle>
            <MDBCardText tag="div" className="blue-gray-text">
              <div className="d-flex justify-content-between">
                <h4 className="border-bottom border-dark">Status:</h4>
                <h4 className="border-bottom border-dark">{props.status}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="border-bottom border-dark">Species:</h4>
                <h4 className="border-bottom border-dark">{props.species}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="border-bottom border-dark">Gender:</h4>
                <h4 className="border-bottom border-dark">{props.gender}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="border-bottom border-dark">Employee ID:</h4>
                <h4 className="border-bottom border-dark">{props.id}</h4>
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
