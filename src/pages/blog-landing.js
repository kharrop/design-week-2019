import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import { FaRegClock } from "react-icons/fa"
import Form from "../components/form"
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

const BlogLanding = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/" style={{ marginBottom: "1em", display: "block" }}>
      Back to home
    </Link>
    <h1 style={{ marginBottom: "1em" }}>Blog</h1>

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

    <Form>
      <p>
        <label>
          Name
          <br /> <input type="text" name="name" placeholder="Symmetra" />
        </label>
      </p>
      <p>
        <label>
          Email <br />
          <input
            type="email"
            name="email"
            placeholder="symmetra@overwatch.com"
          />
        </label>
      </p>
      <p>
        <label>
          Message <br />
          <textarea
            rows="4"
            name="message"
            placeholder="Write a short message..."
          />
        </label>
      </p>
      <p>
        <button className="outline" type="submit">
          Send
        </button>
      </p>
    </Form>
  </Layout>
)

export default BlogLanding
