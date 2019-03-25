import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import overlay from "../images/overlay.png"
console.log(overlay)
const HeaderStyle = styled.div`

		@include vendor('display', 'flex');
		@include vendor('flex-direction', 'column');
		@include vendor('align-items', 'flex-end');
		@include vendor('justify-content', 'space-between');
    background-image: url(/static/overlay-e169e7e6a11f4f7385273662bf3da87d.png), url("https://images.unsplash.com/photo-1485841938031-1bf81239b815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60");
    background-size: cover;
    color: #fff;
    font-family: 'AvenirNext forINTUIT';
		height: 100%;
		left: 0;
		padding: 4em 3em;
		position: fixed;
		text-align: left;
		top: 0;
    width: 30%;
    z-index: 5;

		> * {
			@include vendor('flex-shrink', '0');
			width: 100%;
		}

		> .inner {
			@include vendor('flex-grow', '1');
			margin: 0 0 ($size-header-pad * 0.5) 0;
		}

		strong, b {
			color: _palette(accent2, fg-bold);
		}

		h2, h3, h4, h5, h6 {
      color: _palette(accent2, fg-bold);
		}

		h1 {
			color: #fff;
			font-size: 2rem;
			line-height: 1.2em;
			margin-bottom: 1em;
    }
    
    .header-description {
      font-size: 1.1rem;
      line-height: 1.5;
      margin-bottom: 4em;
    }

		.image.avatar {
			margin: 0 0 (_size(element-margin) * 0.5) 0;
			width: 6.25em;
    }

    a {
      color: #fff;
    }
    
    footer {
      font-size: .9rem;
      position: absolute;
      bottom: 4em;
    }
  }
  
  @media screen and (max-width: 980px){
    background-attachment: scroll;
    background-position: 0;
    background-size: cover;
    left: auto;
    padding: 4em 2em;
    position: relative;
    text-align: center;
    top: auto;
    width: 100%;
    display: block;
    h1 {
      margin-top: 2em;
    }
    footer {
      position: static;
    }
}
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <p className="header-description">
      An inspiring week of design and immersive experiences.
    </p>
    <ul>
      <li>
        <Link to="/">Schedule</Link>
      </li>
      <li>
        <Link to="/blog-landing">Articles</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
    </ul>
    <footer>© {new Date().getFullYear()}, Built by PCG</footer>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
