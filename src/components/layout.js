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
import Navigation from "./navigation"
import "../assets/css/layout.scss"
import styled from "styled-components"

const MainStyle = styled.div`
  margin-left: 30%;
  margin-top: 54px;
  max-width: 54em;
  padding: 4em 4em 0 4em;
  width: 70%;
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 30px;
    padding-top: 100px;
    width: 100%;
    h1 {
      font-size: 26px;
      margin-bottom: 40px;
    }
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
        <Header />
        <Navigation />
        <MainStyle>{children}</MainStyle>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
