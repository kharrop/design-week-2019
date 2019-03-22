import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const PageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "random-page" }) {
      id
      title
      content
    }
  }
`
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi, people!!</h1>
    <p>Welcome to Design Week 2019.</p>
    <p>July 16-18, 2019</p>
    <Placeholder>
      <div className="align-center schedule">Schedule placeholder</div>
    </Placeholder>
    <Placeholder>
      Featured article
      <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
      <p dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      <Link to="/blog-landing/">More articles</Link>
    </Placeholder>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
