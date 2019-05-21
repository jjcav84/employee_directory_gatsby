import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact'

const Count = 493

export default () => (
  <StaticQuery
    query={graphql`
      {
        rickAndMortyAPI {
          character(id: 1) {
            name
            image
            status
            species
            gender
          }
        }
      }
    `}
    render={data => (
      <MDBRow className="mx-auto">
        <MDBCol>
          <MDBCard className="mx-auto" style={{ width: '19rem' }}>
            <div>
              <MDBCardImage src={data.rickAndMortyAPI.character.image} waves hover top />
            </div>
            <MDBCardBody>
              <MDBCardTitle>{data.rickAndMortyAPI.character.name}</MDBCardTitle>
              <MDBCardText>
                <p className="border-bottom border-dark">{data.rickAndMortyAPI.character.status}</p>
                <p className="border-bottom border-dark">{data.rickAndMortyAPI.character.species}</p>
                <p className="border-bottom border-dark">{data.rickAndMortyAPI.character.gender}</p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )}
  />
)
