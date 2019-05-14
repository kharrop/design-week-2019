import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

const Wrapper = styled.div`
  hr {
    margin: 50px 0;
    background-color: #ddd;
  }
`
class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <Wrapper>
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          {/*   <PostIcons node={currentPage} css={{ marginBottom: rhythm(1 / 2) }} /> */}
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </Wrapper>
      </Layout>
    )
  }
}

export default PageTemplate
