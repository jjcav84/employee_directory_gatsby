// React component to display hits from Algolia search
// internal imports
import React from "react"
import Card from "./card"

const ImagePreview = props => (
  <div>
    <Card />
    {/*
    <small>{new Date(hit.date).toLocaleDateString()}</small> */}
    {/* <p
        dangerouslySetInnerHTML={{
          __html: hit.frontmatter.description || hit.excerpt,
        }}
      /> */}
    {/* <p>
      <Highlight hit={hit} attribute="excerpt" tagName="mark" />
    </p> */}
  </div>
)

export default ImagePreview
