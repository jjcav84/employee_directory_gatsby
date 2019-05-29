import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import { MDBContainer, MDBRow } from "mdbreact"

// internal component imports
import Header from "../components/header"
import Footer from "../components/footer"
import ImagePreview from "../components/image-preview"

// import image from /src/images directory
import algolia from "../images/search-by-algolia-light-background.png"

// import external css to hide the list item bullet
import "./index.css"

// for inline styling of h1 tag
const h1Style = {
  marginTop: `130px`,
}

// algolia app ID and Public API Key for use on the front end do not use Admin API KEY here!!!
const searchClient = algoliasearch(
  `ZN34FVCACI`,
  `ad5f24f5113b88a37f5ef59f885599ff`
)

// React directory component
const DirectoryPage = props => (
  <div>
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
    <Header />
    <div style={h1Style} className="text-center">
      <MDBContainer>
        <h1 className="display-4 deep-purple-text">
          Welcome to the Rick and Morty themed{` `}
          {props.data.site.siteMetadata.title}
        </h1>
      </MDBContainer>
    </div>
    <InstantSearch searchClient={searchClient} indexName="Directory">
      <MDBContainer>
        <div className="float-right pt-2">
          <MDBRow>
            <a href="https://algolia.com">
              <img
                src={algolia}
                height="24px"
                width="168px"
                alt="algolia logo"
                className="pr-3"
              />
            </a>
            <SearchBox />
          </MDBRow>
        </div>
      </MDBContainer>
      <MDBContainer>
        <Hits hitComponent={ImagePreview} />
      </MDBContainer>
    </InstantSearch>
    <Footer />
  </div>
)
export default DirectoryPage

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
