import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import image from "../images/home-bg.jpg"
import Branding from "../assets/svg/main-brand.svg"

const HeaderStyle = styled.div`

		@include vendor('display', 'flex');
		@include vendor('flex-direction', 'column');
		@include vendor('align-items', 'flex-end');
		@include vendor('justify-content', 'space-between');
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    color: #fff;
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
  
  @media screen and (max-width: 900px){
    background-attachment: scroll;
    background-position: 0;
    background-size: cover;
    left: auto;
    padding: 10%;
    position: relative;
    text-align: center;
    top: auto;
    width: 100%;
    display: block;
    height: auto;
    h1 {
      margin-top: 2em;
    }
    footer {
      position: static;
    }
}
`

const BrandingWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 900px) {
    margin-top: 0;
    svg {
      height: 80%;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {/*   {siteTitle} */}
      <BrandingWrapper>
        <Branding />
      </BrandingWrapper>
    </Link>

    {/* 
    <footer>© {new Date().getFullYear()}, Built by PCG</footer> */}
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
