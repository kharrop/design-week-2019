import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import ButtonLink from "./button-link"

const NavStyle = styled.div`
  margin-left: 30%;
  max-width: 54em;
  top: 0;
  width: 70%;
  position: fixed;
  background-color: #fff;
  z-index: 9999;

  ul,
  li {
    list-style: none;
    margin: 0;
  }
  @media screen and (max-width: 900px) {
    margin-left: 0;
    width: 100%;
    position: fixed;
    top: 0;
  }
`

const NavContent = styled.div`
  border-bottom: 1px solid #eee;
  margin: 0 2em;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin: 0 1em;
  }
`

const NavLinks = styled.ul`
  display: flex;

  li {
    margin-right: 30px;
    a {
      display: block;
      padding: 16px 8px;
      text-transform: uppercase;
      font-size: 12px;
      color: #8d9096;
      letter-spacing: 0.1em;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: #666;
      }
      &.active {
        color: #a200a1;
      }
    }
  }
  @media screen and (max-width: 320px) {
    li {
      margin-right: 12px;
    }
  }
`
const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`
const Navigation = () => (
  <NavStyle>
    <NavContent>
      <NavLinks>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        {/*   
        <li>
          <Link to="/speakers" activeClassName="active">
            Speakers
          </Link>
        </li>
          */}
        {/*   
        <li>
          <Link to="/blog-landing" activeClassName="active">
            Articles
          </Link>
        </li>
        */}
        <li>
          <Link to="/media" activeClassName="active">
            Media
          </Link>
        </li>
      </NavLinks>
      <ButtonWrapper>
        <ButtonLink
          href="https://intuit-teams.slack.com/messages/CJNRX9M7W/"
          target="_blank"
          activeClassName="active"
        >
          #designweek
        </ButtonLink>
      </ButtonWrapper>
    </NavContent>
  </NavStyle>
)

export default Navigation
