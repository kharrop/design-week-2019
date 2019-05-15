import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Schedule from "../components/schedule"
import Header from "../components/header"
import Media from "react-media"
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
  .button {
    text-transform: uppercase;
    border-radius: 30px;
    border: 2px solid #555;
    color: #555;
    text-decoration: none;
    padding: 4px 16px;
    font-size: 14px;
    font-weight: 600;
    display: table;
    margin: 40px auto 40px;
    letter-spacing: 2px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`
const Statement = styled.h1`
  a {
    font-weight: 500;
  }
`

const PhotoList = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: baseline;
  grid-template-columns: repeat(4, 1fr);
  margin: 30px 0;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: start;
    .gram {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  margin-top: -50px;
  margin-left: -30px;
  margin-right: -30px;
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
    <Media query="(max-width: 799px)">
      {matches =>
        matches && (
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        )
      }
    </Media>

    <Wrapper>
      <Statement>
        Three <Link to="/about">inspiring days</Link> of design & immersive
        experiences to engage and nurture your creativity.
      </Statement>

      <Schedule />

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
      <Link className="button" to="/media">
        More media
      </Link>
    </Wrapper>
  </Layout>
)

export default IndexPage
