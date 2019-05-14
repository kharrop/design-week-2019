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

const FeaturedImg = styled.div`
  height: 120px;
  float: right;
  margin-left: 40px;
`

const Speakers = ({ data }) => (
  <Layout>
    <SEO title="Speakers" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/" style={{ marginBottom: "1em", display: "block" }}>
      Back to home
    </Link>
    <h1 style={{ marginBottom: "1em" }}>Speakers</h1>

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
        >
          <div style={{ width: "100%" }}>
            <h1 dangerouslySetInnerHTML={{ __html: node.title }} />
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <span>
              <FaRegClock size={14} css={{ position: `relative`, bottom: 1 }} />
              {` `}
              {node.date}
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
  </Layout>
)

export default Speakers
