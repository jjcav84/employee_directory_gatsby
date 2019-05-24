// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

// card component to display employee's image and data pulled from the API
const Card = props => {
  // props passed from Index component graphql query to Rick and Morty API
  const src = props.src
  const name = props.name
  const status = props.status
  const species = props.species
  const gender = props.gender
  const id = props.id

  return (
    <MDBRow className="mx-auto">
      <MDBCol>
        <MDBCard className="mx-auto" style={{ width: '19rem' }}>
          <MDBCardImage src={src} alt="employee picture" hover top />
          <MDBCardBody>
            <MDBCardTitle tag="h3" className="text-uppercase">
              {name}
            </MDBCardTitle>
            <MDBCardText tag="div" className="blue-gray-text">
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Status:</h5>
                <h5 className="border-bottom border-dark">{status}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Species:</h5>
                <h5 className="border-bottom border-dark">{species}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Gender:</h5>
                <h5 className="border-bottom border-dark">{gender}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="border-bottom border-dark">Employee ID:</h5>
                <h5 className="border-bottom border-dark">{id}</h5>
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
