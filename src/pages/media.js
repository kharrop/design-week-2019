import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
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
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
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
        <strong>{data.allInstaNode.totalCount}</strong>&nbsp;recent Instagram
        photos tagged with{" "}
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
        <div
          style={{ width: "33%", height: "33%", display: "inline-block" }}
          key={node.id}
        >
          <a
            href={"https://www.instagram.com/p/" + node.id}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              paddingRight: "14px",
              paddingBottom: "14px",
            }}
          >
            <Img alt="dribbble" fluid={node.localFile.childImageSharp.fluid} />
          </a>
        </div>
      ))}
    </div>
    <div />
  </Layout>
)

export default Media
