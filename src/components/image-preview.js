// internal imports from installed packages in node_modules/ directory
import React from "react"
import { MDBRow } from "mdbreact"

// Exernal React component imports
import Card from "./card"

const ImagePreview = ({ hit }) => (
  <div className="pt-5">
    <MDBRow className="pr-3">
      <Card
        src={hit.image}
        name={hit.name}
        species={hit.species}
        gender={hit.gender}
        status={hit.status}
        id={hit.id}
        key={hit.id}
      />
    </MDBRow>
  </div>
)

export default ImagePreview
