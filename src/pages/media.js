import React from "react"
import Layout from "../components/layout"
export const pageQuery = graphql`
  query {
    allInstaNode {
      totalCount
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            publicURL
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

const Media = ({ data }) => (
  <Layout>
    <div style={{ marginBottom: "16px" }}>
      <strong>{data.allInstaNode.totalCount}</strong>&nbsp;Instagram photos
      tagged with #icecream
    </div>

    <div className="photo-list">
      {data.allInstaNode.edges.map(({ node }) => (
        <div>
          <img alt="ice cream" src={node.localFile.publicURL} width="200" />
          <p>{node.timestamp}</p>
        </div>
      ))}
    </div>
    <div />
  </Layout>
)

export default Media
