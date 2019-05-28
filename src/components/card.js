// external imports
import React from "react"
import PropTypes from "prop-types"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBAnimation,
} from "mdbreact"

// card component to display employee's image and data pulled from the GraphQL API
const Card = props => (
  <div className="mx-auto">
    <MDBRow className="mx-auto my-4">
      <MDBCol>
        <MDBAnimation type="pulse" count={2} duration="1s" delay="1s">
          <MDBCard style={{ width: `20rem` }}>
            <MDBCardImage src={props.src} alt={props.name} hover top />
            <MDBCardBody>
              <MDBCardTitle tag="div" className="text-uppercase">
                {props.name}
              </MDBCardTitle>
              <MDBCardText tag="div" small>
                <div className="d-flex justify-content-between">
                  <span className="border-bottom">Status:</span>
                  <span className="border-bottom">{props.status}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="border-bottom">Species:</span>
                  <span className="border-bottom">{props.species}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="border-bottom">Gender:</span>
                  <span className="border-bottom">{props.gender}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Employee ID:</span>
                  <span>{props.id}</span>
                </div>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBAnimation>
      </MDBCol>
    </MDBRow>
  </div>
)

// type checking
Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  id: PropTypes.string,
}

export default Card
