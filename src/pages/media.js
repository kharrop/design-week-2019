import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

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
const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: start;
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
    <SEO title="Media" keywords={[`gatsby`, `application`, `react`]} />
    {data.allInstaNode.edges ? (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <Statement>
            <strong>{data.allInstaNode.totalCount}</strong>&nbsp;recent
            Instagram photos tagged with{" "}
            <a
              href="https://www.instagram.com/explore/tags/intuitdesignweek/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              #intuitdesignweek
            </a>
          </Statement>
        </div>
        <Wrapper>
          <PhotoList>
            {data.allInstaNode.edges.map(({ node }) => (
              <div className="gram" key={node.id}>
                <a
                  href={"https://www.instagram.com/p/" + node.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                  }}
                >
                  <Img
                    alt="pcgdesignweek"
                    fluid={node.localFile.childImageSharp.fluid}
                  />
                </a>
              </div>
            ))}
          </PhotoList>
        </Wrapper>
      </div>
    ) : (
      <div>Instagram is having issues.</div>
    )}
  </Layout>
)

export default Media
