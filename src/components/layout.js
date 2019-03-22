/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const MainStyle = styled.div`
  margin-left: 30%;
  max-width: 54em;
  padding: 4em 4em 4em;
  width: 70%;
  @media screen and (max-width: 980px) {
    margin: 0;
    padding: 5em 4em;
    width: 100%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainStyle>{children}</MainStyle>
        <footer>© {new Date().getFullYear()}, Built by PCG</footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
