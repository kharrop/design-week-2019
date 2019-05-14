import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"

const Statement = styled.h1`
  a {
    font-weight: 500;
    color: #a200a1;
  }
`

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    }
  }
`

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
              fluid(quality: 100, maxWidth: 300) {
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
      <Statement>
        <strong>{data.allInstaNode.totalCount}</strong>&nbsp;recent Instagram
        photos tagged with{" "}
        <a
          href="https://www.instagram.com/explore/tags/pcgdesignweek/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          #pcgdesignweek
        </a>
      </Statement>
    </div>
    <Wrapper>
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
              <Img
                alt="pcgdesignweek"
                fluid={node.localFile.childImageSharp.fluid}
              />
            </a>
          </div>
        ))}
      </div>
    </Wrapper>
  </Layout>
)

export default Media
