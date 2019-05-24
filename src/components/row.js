// External imports
import React from 'react'
import PropTypes from 'prop-types'

// Internal Component import
import Card from './card'

const CardRow = props => {
  return (
    <div>
      {props.cards.map(card => {
        return (
          <Card
            src={card.image}
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            id={card.id}
          />
        )
      })}
    </div>
  )
}

CardRow.PropTypes = {
  cards: PropTypes.array
}

export default CardRow
