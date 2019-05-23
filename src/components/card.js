// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

// card component to display employee's image and data pulled from the API
const Card = props => {
  const src = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  const name = 'Rick Sanchez'
  const status = 'Alive'
  const species = 'Human'
  const gender = 'Male'
  const id = 1

  return (
    <MDBRow className="mx-auto">
      <MDBCol>
        <MDBCard className="mx-auto" style={{ width: '19rem' }}>
          <MDBCardImage src={src} alt="employee picture" hover top />
          <MDBCardBody>
            <MDBCardTitle tag="h3">{name}</MDBCardTitle>
            <MDBCardText tag="div">
              <div className="pb-2">
                <span className="border-bottom border-dark">Status: {status}</span>
              </div>
              <div className="pb-2">
                <span className="border-bottom border-dark">Species: {species}</span>
              </div>
              <div className="pb-2">
                <span className="border-bottom border-dark">Gender: {gender}</span>
              </div>
              <div className="pb-2">
                <span className="border-bottom border-dark">Employee ID: {id}</span>
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
  id: PropTypes.number
}

export default Card
