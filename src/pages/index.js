import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Schedule from "../components/schedule"

const Wrapper = styled.div`
  a {
    color: #a200a1;
  }
  .gatsby-image-wrapper {
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    }
  }
`
const Statement = styled.h1`
  a {
    font-weight: 500;
  }
`

export const PageQuery = graphql`
  query {
    allInstaNode(sort: { order: DESC, fields: [timestamp] }, limit: 4) {
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
              fluid(quality: 100, maxWidth: 150) {
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
    wordpressPage(slug: { eq: "about" }) {
      id
      title
      content
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <Statement>
        Three <Link to="/about">inspiring days</Link> of design & immersive
        experiences to engage and nurture your creativity.
      </Statement>

      <Schedule />
      <div style={{ margin: "3em 0" }}>
        <div
          className="photo-list"
          style={{ display: "flex", alignItems: "baseline" }}
        >
          {data.allInstaNode.edges.map(({ node }) => (
            <div style={{ width: "33%", height: "33%" }} key={node.id}>
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
      </div>
    </Wrapper>
  </Layout>
)

export default IndexPage
