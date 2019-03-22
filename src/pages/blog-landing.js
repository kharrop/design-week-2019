import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaRegClock } from "react-icons/fa"

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          content
          slug
          ...PostIcons
        }
      }
    }
  }
`

const BlogLanding = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/" style={{ marginBottom: "1em", display: "block" }}>
      Back to home
    </Link>
    <h1 style={{ marginBottom: "1em" }}>Blog</h1>

    {data.allWordpressPost.edges.map(({ node }) => (
      <div
        className="article"
        style={{
          marginBottom: "2em",
          paddingBottom: "2em",
          borderBottom: "1px solid #eee",
        }}
      >
        <Link to={node.slug} css={{ textDecoration: `none` }}>
          <p>{node.title}</p>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        <span>
          <FaRegClock size={14} css={{ position: `relative`, bottom: 1 }} />
          {` `}
          {node.date}
        </span>
      </div>
    ))}
  </Layout>
)

export default BlogLanding
