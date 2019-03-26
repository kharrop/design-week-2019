import React from "react"
import Layout from "../components/layout"

export const pageQuery = graphql`
  query {
    allInstaNode(sort: { order: DESC, fields: [timestamp] }) {
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
      <h1
        style={{
          fontWeight: "normal",
          marginBottom: "1em",
          lineHeight: "1.3em",
        }}
      >
        <strong>{data.allInstaNode.totalCount}</strong>&nbsp;Instagram photos
        tagged with{" "}
        <a
          href="https://www.instagram.com/explore/tags/dribbble/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          #dribbble
        </a>
      </h1>
    </div>

    <div className="photo-list">
      {data.allInstaNode.edges.map(({ node }) => (
        <div style={{ display: "inline" }} key={node.id}>
          <a
            href={"https://www.instagram.com/p/" + node.id}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              width: "33%",
              height: "33%",
              paddingRight: "14px",
              paddingBottom: "14px",
            }}
          >
            <img
              alt="ice cream"
              src={node.localFile.publicURL}
              style={{
                objectFit: "cover",
              }}
            />
          </a>
        </div>
      ))}
    </div>
    <div />
  </Layout>
)

export default Media
