import React, { Component } from "react"
import { graphql } from "gatsby"
import PostIcons from "../components/post-icons"
import Layout from "../components/layout"

import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <Link to="/">Back to home</Link>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <PostIcons node={currentPage} css={{ marginBottom: rhythm(1 / 2) }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
