import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Placeholder = styled.div`
  background-color: #eee;
  border-radius: 4px;
  margin: 0 0 2em;
  padding: 2em;
  font-size: 1em;
  .align-center {
    text-align: center;
  }
  .schedule {
    padding: 4em 0;
  }
`

export const PageQuery = graphql`
  query {
    allInstaNode(sort: { order: DESC, fields: [timestamp] }, limit: 3) {
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
    wordpressPage(slug: { eq: "random-page" }) {
      id
      title
      content
    }
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  text-align: center;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h1>Hi, people!!</h1>
    <p>Welcome to Design Week 2019.</p>
    <p id="schedule" style={{ paddingTop: "20px" }}>
      July 16-18, 2019
    </p>

    <Placeholder>
      <div className="align-center schedule">Schedule placeholder</div>
    </Placeholder>
    <Placeholder>
      <div
        className="image-list"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {data.allInstaNode.edges.map(({ node }) => (
          <ImageWrapper key={node.id}>
            <a
              href={"https://www.instagram.com/p/" + node.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="ice cream"
                src={node.thumbnails[0].src}
                style={{ objectFit: "cover", width: "150px", height: "150px" }}
              />
            </a>
          </ImageWrapper>
        ))}
      </div>
      <Link to="/media">More images</Link>
    </Placeholder>

    <Placeholder>
      Some other neat page
      <Link to="/random-page" style={{ textDecoration: "none" }}>
        <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
      </Link>
      <Link to="/blog-landing/">More articles</Link>
    </Placeholder>
  </Layout>
)

export default IndexPage
