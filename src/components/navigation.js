import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

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
  @media screen and (max-width: 980px) {
    display: none;
  }
`

const NavContent = styled.div`
  border-bottom: 1px solid #eee;
  margin: 0 2em;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
`

const NavLinks = styled.ul`
  display: flex;
  li {
    margin-right: 40px;
    a {
      display: block;
      padding: 16px 0;
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
`

const Button = styled.a`
  position: absolute;
  right: 0;
  border-radius: 20px;
  background-color: #10a472;
  border: 0 none;
  color: #fff;
  font-weight: 600;
  padding: 2px 16px;
  letter-spacing: 0.1em;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  outline: 0 none;
  &:hover {
    background-color: #0a8a5f;
  }
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
      <Button
        href="https://intuit-teams.slack.com/messages/CJNRX9M7W/"
        target="_blank"
        activeClassName="active"
      >
        #pcg-designweek
      </Button>
    </NavContent>
  </NavStyle>
)

export default Navigation
