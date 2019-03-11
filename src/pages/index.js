import React from "react"
import { Link, graphql } from "gatsby"

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi, people!!</h1>
    <p>Welcome to Design Week 2019.</p>
    <p>July 16-18, 2019</p>
    Title from another page:
    <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} />
    Content from another page:
    <p dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
    <Link to="/blog-landing/">Blog</Link>
    <div>
      <p>We're a very cool website you should return to often.</p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
