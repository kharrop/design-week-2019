import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import { FaRegClock } from "react-icons/fa"

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          title
          id
          featured_media {
            source_url
            alt_text
          }
          excerpt
          content
          slug
          ...PostIcons
        }
      }
    }
  }
`
const Wrapper = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    color: #555;
    font-size: 0.9rem;
  }
  .details {
    color: #777;
    display: flex;
    svg {
      margin-right: 6px;
    }
  }
  .date {
    font-size: 0.7rem;
    line-height: 1;
  }
  .content {
    margin-right: 40px;
  }
  @media screen and (max-width: 900px) {
    .article-item {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    img {
      width: 100%;
      display: block;
      height: auto;
    }
    .content {
      width: 100%;
      margin-right: 0;
    }
  }
`

const FeaturedImg = styled.img`
  height: 120px;
`

const BlogLanding = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <h1>Recent articles</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div
          className="article"
          key={node.id}
          style={{
            marginBottom: "2em",
            paddingBottom: "2em",
            borderBottom: "1px solid #eee",
          }}
        >
          <Link
            to={`/${node.slug}`}
            css={{
              textDecoration: "none",
              display: "flex",
              alignItems: "top",
            }}
            className="article-item"
          >
            <div style={{ width: "100%" }} className="content">
              <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <span className="details">
                <FaRegClock
                  size={14}
                  css={{ position: `relative`, bottom: 1 }}
                />
                {` `}
                <span className="date">{node.date}</span>
              </span>
            </div>
            {node.featured_media && (
              <FeaturedImg
                alt={node.featured_media.alt_text}
                src={node.featured_media.source_url}
              />
            )}
          </Link>
        </div>
      ))}
    </Wrapper>
  </Layout>
)

export default BlogLanding
