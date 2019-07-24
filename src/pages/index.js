import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Schedule from "../components/schedule"
import Button from "../components/button"
import image from "../images/home-bg.jpg"
import Branding from "../images/svg/main-brand.svg"
/* eslint-disable */

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
  .post-message {
    margin-bottom: 50px;
    line-height: 1.8;
  }
  @media screen and (max-width: 900px) {
    .disclaimer {
      display: block;
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
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
    margin-bottom: 30px;
    margin-top: -50px;
    margin-left: -30px;
    margin-right: -30px;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 20%;
    svg {
      width: 100%;
      height: auto;
    }
  }
`

export const PageQuery = graphql`
  query {
    posters: file(relativePath: { eq: "posters.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allInstaNode(sort: { order: DESC, fields: [timestamp] }, limit: 4) {
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

const ButtonWrapper = styled.div`
  display: table;
  margin: 40px auto 100px;
`

const Disclaimer = styled.div`
  margin-bottom: 40px;
  font-size: 0.8rem;
  margin-top: -10px;
  @media screen and (max-width: 900px) {
    border-bottom: 1px solid #eee;
    padding: 0 20px 20px;
    margin-top: -10px;
    margin-left: -30px;
    margin-right: 30px;
    width: 100vw;
    text-align: center;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <HeaderWrapper>
      <Branding />
    </HeaderWrapper>

    <Wrapper>
      <div className="post-message">
        <h3>That's a wrap!</h3>
        <p>
          Thanks to everyone that attended Design Week 2019. <br />
          We'll be back in June 2020! In the meantime, help us improve our event
          by{" "}
          <a
            href={"https://sherridrury.typeform.com/to/DtoJyR"}
            target="_blank"
            rel="noopener noreferrer"
          >
            providing your feedback
          </a>
          .
        </p>
        <Img fluid={data.posters.childImageSharp.fluid} />
      </div>
      {/* 
      <Disclaimer>
        <span role="img" aria-label="pin">
          📍
        </span>{" "}
        All talks are in the <strong>Texas Conference Room</strong>.{" "}
        <span className="disclaimer">
          This event is for full-time Intuit employees and special guests only.
        </span>
      </Disclaimer>
*/}

      <Statement>
        Three days of{" "}
        <Link to="/icymi-design-week-2018">inspiring experiences</Link> that
        engage and nurture your creativity.
      </Statement>

      <Schedule />
      {data.allInstaNode.edges && (
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
          <ButtonWrapper>
            <Button className="outline" href="/media" target="_self">
              More media
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    </Wrapper>
  </Layout>
)

export default IndexPage
