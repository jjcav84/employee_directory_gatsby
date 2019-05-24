// External imports
import React from 'react'
import PropTypes from 'prop-types'
import { MDBRow } from 'mdbreact'

// Internal Component import
import Card from './card'

const CardRow = props => {
  return (
    <MDBRow>
      {props.cards.map(card => {
        return (
          <Card
            src={card.image}
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            id={card.id}
            key={card.id}
          />
        )
      })}
    </MDBRow>
  )
}

CardRow.propTypes = {
  cards: PropTypes.array
}

export default CardRow
