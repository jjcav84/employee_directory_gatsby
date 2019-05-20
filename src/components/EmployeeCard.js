import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

const EmployeeCard = () => {
  return (
    <MDBRow className="mx-auto">
    <MDBCol>
      <MDBCard className="mx-auto mb-4" style={{ width: '19rem' }}>
        <MDBCardImage src="https://rickandmortyapi.com/api/character/avatar/298.jpeg" waves hover top />
        <MDBCardBody>
          <MDBCardTitle>Employee Name</MDBCardTitle>
          <MDBCardText>
           <p className="border-bottom border-dark"> Status</p>
           <p className="border-bottom border-dark"> Species</p>
           <p className="border-bottom border-dark"> Gender</p>
           <p className="border-bottom border-dark"> Origin</p>
           <p>Last Location</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className="mx-auto mb-4" style={{ width: '19rem' }}>
        <MDBCardImage src="https://rickandmortyapi.com/api/character/avatar/84.jpeg" waves hover top />
        <MDBCardBody>
          <MDBCardTitle>Employee Name</MDBCardTitle>
          <MDBCardText>
           <p className="border-bottom border-dark"> Status</p>
           <p className="border-bottom border-dark"> Species</p>
           <p className="border-bottom border-dark"> Gender</p>
           <p className="border-bottom border-dark"> Origin</p>
           <p>Last Location</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className="mx-auto mb-4" style={{ width: '19em' }}>
        <MDBCardImage src="https://rickandmortyapi.com/api/character/avatar/165.jpeg" waves hover top />
        <MDBCardBody>
          <MDBCardTitle>Employee Name</MDBCardTitle>
          <MDBCardText>
           <p className="border-bottom border-dark"> Status</p>
           <p className="border-bottom border-dark"> Species</p>
           <p className="border-bottom border-dark"> Gender</p>
           <p className="border-bottom border-dark"> Origin</p>
           <p>Last Location</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard className="mx-auto mb-4" style={{ width: '19em' }}>
        <MDBCardImage src="https://rickandmortyapi.com/api/character/avatar/77.jpeg" waves hover top />
        <MDBCardBody>
          <MDBCardTitle>Employee Name</MDBCardTitle>
          <MDBCardText>
           <p className="border-bottom border-dark"> Status</p>
           <p className="border-bottom border-dark"> Species</p>
           <p className="border-bottom border-dark"> Gender</p>
           <p className="border-bottom border-dark"> Origin</p>
           <p>Last Location</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
  )
}

export default EmployeeCard
