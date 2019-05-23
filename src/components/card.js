//external imports
import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

//card component to display employee's image and data pulled from the API
const Card = props => {
  return (
    <MDBRow className="mx-auto">
      <MDBCol>
        <MDBCard className="mx-auto" style={{ width: '19rem' }}>
          <div>
            <MDBCardImage src={props.image} waves hover top />
          </div>
          <MDBCardBody>
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBCardText>
              <p className="border-bottom border-dark">{props.status}</p>
              <p className="border-bottom border-dark">{props.species}</p>
              <p>{props.gender}</p>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default Card
