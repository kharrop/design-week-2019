import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/post-icons"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

import styled from "styled-components"

const PostWrapper = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 50px;
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

const Wrapper = styled.div`
  .link {
    text-decoration: none;
    margin-bottom: 10px;
    margin-top: -20px;
    font-size: 0.8rem;
    display: block;
  }
`

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout className="post">
        <Wrapper>
          <Link to="/blog-landing" className="link">
            ← All articles
          </Link>
          <PostWrapper>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <PostIcons
              className="post-icons"
              node={post}
              css={{ marginBottom: rhythm(1 / 2) }}
            />
          </PostWrapper>
        </Wrapper>
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
