import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/post-icons"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

import styled from "styled-components"

const PostWrapper = styled.div`
  p {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 60px;
  }

  p + ul {
    margin-top: -30px;
    margin-bottom: 60px;
  }

  h2 {
    margin-bottom: 20px;
  }

  figcaption {
    margin-bottom: 60px;
  }

  .post-icons {
    font-size: 0.9rem;
    margin-top: 100px;
    color: #666;
    display: flex;
    > span {
      display: flex;
      align-items: center;
    }
    > span svg {
      margin-right: 8px;
    }
  }
`

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout className="post">
        <PostWrapper>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <PostIcons
            className="post-icons"
            node={post}
            css={{ marginBottom: rhythm(1 / 2) }}
          />
        </PostWrapper>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostIcons
    }
  }
`
