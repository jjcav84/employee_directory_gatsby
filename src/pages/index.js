// external imports
import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

// internal component imports
import Layout from "../components/layout"
import CardRow from "../components/row"

// for inline styling of h1 tag
const h1Style = {
  marginTop: `120px`,
  marginBottom: `-15px`,
}

// React index component
const IndexPage = props => {
  const cards = props.data.rickAndMortyAPI.characters.results

  const displayCards = () => {
    const cardArray = []
    let cardRow = []
    let count = 0

    cards.map(card => {
      if (card) {
        cardArray.push(card)
      }
    })

    return cardArray.map(card => {
      if (cardRow.length === 4) {
        cardRow = []
      }

      cardRow.push(card)
      count++

      if (cardRow.length === 4) {
        return returnRow(cardRow, count)
      } else if (cardArray.length - count === 0) {
        return returnRow(cardRow, count)
      }
      return null
    })
  }

  const returnRow = (cards, count) => <CardRow cards={cards} key={count} />

  console.log(props)

  return (
    <Layout>
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={props.data.site.siteMetadata.description}
        />
        <meta name="keywords" content={props.data.site.siteMetadata.keywords} />
        <meta name="author" content={props.data.site.siteMetadata.author} />
        <link rel="canonical" href={props.data.site.siteMetadata.siteUrl} />
      </Helmet>
      <div style={h1Style} className="text-center pb-4">
        <h1 className="display-3">{props.data.site.siteMetadata.title}</h1>
        {displayCards()}
      </div>
    </Layout>
  )
}

export default IndexPage

// graphql query to site metadata in gatsby-config.js file
// graphql query to rick and morty api data from all characters
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
        keywords
      }
    }
    rickAndMortyAPI {
      characters {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          image
          status
          species
          gender
        }
      }
    }
  }
`
